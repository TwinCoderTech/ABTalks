'use server';

import { db } from '@/lib/db';
import { GoogleGenAI } from '@google/genai';

export async function getOrCreateChallenge(dayId: number) {
  // First, check if the challenge is already cached in the database
  const existingChallenge = await db.claudeChallenge.findUnique({
    where: { dayId },
  });

  if (existingChallenge) {
    return existingChallenge;
  }

  // If it doesn't exist, we must generate it.
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn('GEMINI_API_KEY is not set. Generating a high-quality fallback demo challenge instead.');
    
    // Automatically generate and save a demo challenge if the user hasn't configured their API key
    const demoChallenge = await db.claudeChallenge.create({
      data: {
        dayId,
        title: `Day ${dayId}: Master Context Windows`,
        description: "Let Claude analyze complex documents for you automatically.",
        prompt: `PROMPT 1: Document Upload & Context Setting\n\nI am uploading a complex [insert document type e.g., legal contract, technical spec]. \n\nPlease analyze this document and provide:\n1. A 3-sentence executive summary.\n2. The top 5 key takeaways or risks.\n3. Any action items required by me.\n\nPROMPT 2: Deep Dive\n\nNow, focusing specifically on [Section X or Topic Y], explain it to me as if I have no prior background in this field. Use analogies if helpful.`,
      },
    });
    
    return demoChallenge;
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `You are an expert AI prompt engineering instructor. 
Create a 45-minute daily challenge for "Day ${dayId}" of a 60-day "Claude AI Mastery" course.

Format your response STRICTLY as a JSON object with the following keys:
- title: A catchy, short title for the challenge (e.g. "Detect Job Red Flags")
- description: A short, inspiring one-sentence description (e.g. "Let Claude find your next opportunity")
- prompt: A comprehensive prompt template that the user should copy and use in Claude AI to complete the challenge. This should be detailed, clear, and around 100-300 words.

Ensure the response is ONLY valid JSON, with no markdown formatting around it.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const textResponse = response.text || '';
    // Strip markdown formatting if the model accidentally included it
    const cleanJson = textResponse.replace(/```json/g, '').replace(/```/g, '').trim();
    
    const parsed = JSON.parse(cleanJson);
    
    // Save to the database
    const newChallenge = await db.claudeChallenge.create({
      data: {
        dayId,
        title: parsed.title || `Day ${dayId} Challenge`,
        description: parsed.description || 'Master Claude AI today.',
        prompt: parsed.prompt || 'Write your prompt here.',
      },
    });

    return newChallenge;
  } catch (error) {
    console.error('Failed to generate challenge:', error);
    throw new Error('Failed to generate challenge using Gemini API.');
  }
}

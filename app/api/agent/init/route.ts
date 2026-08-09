import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { name, description, model, persona } = body;

    if (!name) {
      return NextResponse.json(
        { error: 'Agent name is required' },
        { status: 400 }
      );
    }

    const personaData = {
      name: persona?.name || `${name} Persona`,
      tone: persona?.tone || body.tone || 'Professional & Engaging',
      voiceStyle: persona?.voiceStyle || body.voiceStyle || 'Clear, concise, insightful',
      systemPrompt: persona?.systemPrompt || body.systemPrompt || 'You are an autonomous AI content creator.',
      targetAudience: persona?.targetAudience || body.targetAudience || 'General Audience',
    };

    const newAgent = await prisma.agent.create({
      data: {
        name,
        description: description || null,
        model: model || 'gemini-2.5-flash',
        persona: {
          create: personaData,
        },
      },
      include: {
        persona: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Agent and Persona initialized successfully',
        agent: newAgent,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error initializing agent:', error);
    return NextResponse.json(
      {
        error: 'Failed to initialize agent',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

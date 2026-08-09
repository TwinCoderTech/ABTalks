import { getOrCreateChallenge } from '@/actions/challengeActions';
import ChallengeClient from './ChallengeClient';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    dayId: string;
  }>;
}

export default async function DayChallengePage({ params }: PageProps) {
  const resolvedParams = await params;
  const dayString = resolvedParams.dayId.replace('day-', '');
  const dayIdParam = parseInt(dayString, 10);
  
  if (isNaN(dayIdParam) || dayIdParam < 1 || dayIdParam > 60) {
    notFound();
  }

  try {
    const challenge = await getOrCreateChallenge(dayIdParam);

    return (
      <ChallengeClient 
        dayId={challenge.dayId}
        title={challenge.title}
        description={challenge.description}
        promptText={challenge.prompt}
      />
    );
  } catch (error) {
    console.error("Error loading challenge:", error);
    // Render a fallback or error UI
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center', minHeight: '100vh', backgroundColor: '#fdfbf7' }}>
        <h2 style={{ fontSize: '24px', color: '#ef4444' }}>Unable to load today's challenge.</h2>
        <p style={{ color: '#64748b', marginTop: '10px' }}>Make sure you have configured your GEMINI_API_KEY in the .env file.</p>
      </div>
    );
  }
}

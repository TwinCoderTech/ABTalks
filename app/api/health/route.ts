import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const agentCount = await prisma.agent.count();
    return NextResponse.json({
      status: 'online',
      service: 'Autonomous AI Creator API',
      timestamp: new Date().toISOString(),
      database: 'connected',
      agentsRegistered: agentCount,
    });
  } catch (error) {
    return NextResponse.json(
      {
        status: 'degraded',
        service: 'Autonomous AI Creator API',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown database error',
      },
      { status: 500 }
    );
  }
}

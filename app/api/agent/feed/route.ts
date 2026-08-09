import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const agentId = searchParams.get('agentId');
    const platform = searchParams.get('platform');
    const limitParam = searchParams.get('limit');
    const limit = limitParam ? parseInt(limitParam, 10) : 20;

    const whereClause: Record<string, unknown> = {};
    if (agentId) whereClause.agentId = agentId;
    if (platform) whereClause.platform = platform;

    const posts = await prisma.publishedPost.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
      include: {
        agent: {
          select: {
            id: true,
            name: true,
            model: true,
            persona: {
              select: {
                tone: true,
                voiceStyle: true,
              },
            },
          },
        },
        topic: {
          select: {
            id: true,
            title: true,
            category: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      count: posts.length,
      posts,
    });
  } catch (error) {
    console.error('Error fetching feed:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch feed',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

import prisma from '@/lib/prisma';
import { AgentConfig } from '@/types';

export class AgentService {
  static async listAgents() {
    return prisma.agent.findMany({
      include: {
        persona: true,
        topics: { take: 5 },
        publishedPosts: { take: 5 },
      },
    });
  }

  static async getAgentById(id: string) {
    return prisma.agent.findUnique({
      where: { id },
      include: {
        persona: true,
        topics: true,
        rejectedTopics: true,
        publishedPosts: true,
        memories: true,
        editorialDecisions: true,
        publishingJobs: true,
      },
    });
  }

  static async createAgent(config: AgentConfig) {
    return prisma.agent.create({
      data: {
        name: config.name,
        description: config.description,
        model: config.model,
        persona: {
          create: {
            name: `${config.name} Persona`,
            tone: config.tone,
            voiceStyle: config.voiceStyle,
            systemPrompt: config.systemPrompt,
          },
        },
      },
      include: {
        persona: true,
      },
    });
  }
}

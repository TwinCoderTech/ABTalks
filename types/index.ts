export type AgentStatus = 'ACTIVE' | 'PAUSED' | 'IDLE' | 'ERROR';

export type TopicStatus = 'PROPOSED' | 'APPROVED' | 'REJECTED' | 'IN_PROGRESS' | 'COMPLETED';

export type PublishingPlatform = 'TWITTER' | 'LINKEDIN' | 'MEDIUM' | 'BLOG';

export type JobStatus = 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';

export interface AgentConfig {
  name: string;
  description?: string;
  model: string;
  tone: string;
  voiceStyle: string;
  systemPrompt: string;
}

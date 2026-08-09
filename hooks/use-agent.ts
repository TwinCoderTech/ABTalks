'use client';

import { useState, useEffect } from 'react';

export interface AgentSummary {
  id: string;
  name: string;
  status: string;
  model: string;
}

export function useAgents() {
  const [agents, setAgents] = useState<AgentSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadAgents() {
      try {
        const res = await fetch('/api/health');
        if (res.ok) {
          setAgents([]);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch agents');
      } finally {
        setLoading(false);
      }
    }
    loadAgents();
  }, []);

  return { agents, loading, error };
}

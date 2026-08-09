export interface ScheduledTask {
  id: string;
  name: string;
  cronExpression: string;
  enabled: boolean;
}

export class TaskRunner {
  private static tasks: ScheduledTask[] = [];

  static registerTask(task: ScheduledTask) {
    this.tasks.push(task);
  }

  static getActiveTasks() {
    return this.tasks.filter((t) => t.enabled);
  }
}

export type Task = {
  id: string;
  label: string;
  description?: string;
  completed: boolean;
  required?: boolean;
};

export type StartingGuide = {
  title: string;
  description: string;
  tasks: Task[];
}; 
import { Task } from "./types";

export interface TasksSchema {
  data: Task[];
  syncTime?: string;
  backupTime?: string;
  isLoading?: boolean;
  error?: string;
  _inited: boolean;
}

import { Project } from "./types";

export interface ProjectsSchema {
  data: Project[];
  syncTime?: string;
  backupTime?: string;
  isLoading?: boolean;
  error?: string;
  _inited: boolean;
}

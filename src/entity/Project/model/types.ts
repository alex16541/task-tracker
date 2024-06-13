export interface ProjectSection {
  id: string;
  name: string;
  tasks: string[]; // Айдишники тасок в порядке отображения
}

export interface Project {
  id: string;
  name: string;
  sections?: ProjectSection[];
  color?: string;
  view?: "list" | "board" | "calendar";
  sort?: string;
  order?: string;
  subprojects?: string[]; // Список айдишников подпроектов
}

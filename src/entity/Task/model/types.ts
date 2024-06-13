export interface Task {
  id: string;
  title: string;
  priority: 1 | 2 | 3 | 4;
  project?: string; // айдишник проекта
  section?: string; // айдишник раздела
  description?: string;
  complited?: boolean;
  date?: string;
  time?: string;
  timeToWork?: string;
  tags?: string[];
  path?: string; // Путь: проект -> подпроект -> раздел -> таска -> сабтаска -> сабтаска
  subtasks?: string[]; // Список йдишников сабтасок
  comments?: string[]; // Список йдишников тэгов
}

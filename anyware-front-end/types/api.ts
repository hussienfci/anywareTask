export interface Announcement {
  _id?: string;
  author: string;
  message: string;
}

export interface Quiz {
  _id?: string;
  questions: string[];
  answers: string[] ; 
}


export interface DashboardData {
  announcements: Announcement[];
  quizzes: Quiz[];
}
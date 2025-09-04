import { handleResponse } from "@/components/lib/handleResponse";

const BASE_URL = process.env.NEXT_PUBLIC_NEST_BASE_URL;


// Announcements Service
export const getAnnouncements = async () => {
  try {

    const res = await fetch(`${BASE_URL}/announcement/Announcements`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return handleResponse(res);
  } catch (error) {
    console.error("Error fetching announcements:", error);
    throw error;
  }
};

// Quizzes Service
export const getQuizzes = async () => {
  try {
    const res = await fetch(`${BASE_URL}/quiz/quizzes/QuizController_findAll`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return handleResponse(res);
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    throw error;
  }
};

// Combined service to get both announcements and quizzes
export const getDashboardData = async () => {
  try {
    const [announcements, quizzes] = await Promise.all([
      getAnnouncements(),
      getQuizzes()
    ]);
    
    return { announcements, quizzes };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
};
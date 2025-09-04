import { handleResponse } from "@/components/lib/handleResponse";

// Remove custom ImportMeta interfaces; rely on Vite's global types

const BASE_URL = process.env.NEXT_PUBLIC_NEST_BASE_URL;

export const getQuizzesData = async () => {
  try {
   

    const res = await fetch(`${BASE_URL}/Quiz/QuizController_findAll`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
    });
    return handleResponse(res);
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
};

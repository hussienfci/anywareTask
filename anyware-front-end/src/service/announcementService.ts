import { handleResponse } from "@/components/lib/handleResponse";

const BASE_URL = process.env.NEXT_PUBLIC_NEST_BASE_URL;

export const getAnnouncements = async () => {
  try {

    const res = await fetch(`${BASE_URL}/Announcement/AnnouncementController_findAllAnnounce`, {
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
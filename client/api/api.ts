import { Track } from "@/types/track";

const baseURL = "http://localhost:8000/tracks";

const headers = {
  "Content-Type": "application/json",
};
export function createApi() {
  return {
    async getTracks(): Promise<Track[]> {
      try {
        const responce = await fetch(`${baseURL}`, {
          headers: headers,
          cache: "no-cache",
          method: "GET",
        });

        return responce.json();
      } catch (e) {
        return [];
      }
    },
    async deleteTrack(id: string): Promise<string> {
      try {
        const responce = await fetch(`${baseURL}/${id}`, {
          headers: headers,
          cache: "reload",
          method: "DELETE",
        });
        return responce.json();
      } catch (e) {
        return "Request failed";
      }
    },
  };
}

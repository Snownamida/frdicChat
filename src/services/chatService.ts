import axios from "axios";

export default class ChatService {
  static async getMessages() {
    try {
      const reponse = await axios.get("studylist/words/0", {
        headers: {
          Authorization:
            "NIS fIXVeb9bLQnDVHhji00UfRU1CQ0unDx106Nfjg/FHtHnT4NUJztKAg==",
        },
        baseURL: "https://api.frdic.com/api/open/v1/",
        params: {
          language: "fr",
        },
      });
      return reponse.data;
    } catch (error) {
      throw error;
    }
  }
}

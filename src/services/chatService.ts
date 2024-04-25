import axios from "axios";

export default class ChatService {
  static async getMessages() {
    try {
      const reponse = await axios.get("/studylist/words/0", {
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
  static async sendMessage(message: string) {
    let ip: string = "";
    try {
      const reponse = await axios.get("https://api.ipify.org?format=json");
      ip = reponse.data.ip;
    } catch (error) {
      console.log(error);
    }

    try {
      const reponse = await axios.post(
        "/studylist/words",
        {
          id: "0",
          language: "fr",
          words: [
            JSON.stringify({
              ip: ip ? ip : "未知IP",
              dateString: new Date().toISOString(),
              text: message,
            }),
          ],
        },
        {
          headers: {
            Authorization:
              "NIS fIXVeb9bLQnDVHhji00UfRU1CQ0unDx106Nfjg/FHtHnT4NUJztKAg==",
          },
          baseURL: "https://api.frdic.com/api/open/v1/",
        }
      );
      return reponse.data;
    } catch (error) {
      throw error;
    }
  }
}

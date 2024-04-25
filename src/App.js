import React, { useEffect, useState } from "react";
import { MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import ChatService from "./services/chatService";

export default function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const getMessagesInterval = setInterval(async () => {
      try {
        const messages = await ChatService.getMessages();
        console.log(messages);
        setMessages(messages);
      } catch (error) {
        console.error(error);
      }
    }, 2000);
    return () => {
      clearInterval(getMessagesInterval);
    };
  }, []);
  return (
    <MessageList
      className="message-list"
      lockable={true}
      toBottomHeight={"100%"}
      dataSource={[
        {
          position: "left",
          type: "text",
          title: "Kursat",
          text: "Give me a message list example !",
        },
        {
          position: "right",
          type: "text",
          title: "Emre",
          text: "That's all.",
        },
      ]}
    />
  );
}

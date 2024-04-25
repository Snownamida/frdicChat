import React, { useEffect, useState } from "react";
import { Button, Input, MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import ChatService from "./services/chatService";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getMessagesInterval = setInterval(async () => {
      try {
        const messages = await ChatService.getMessages();
        setMessages(messages.data);
      } catch (error) {
        console.error(error);
      }
    }, 5000);
    return () => {
      clearInterval(getMessagesInterval);
    };
  }, []);

  const sendMessageHandler = async () => {
    if (!message) return;
    try {
      const response = await ChatService.sendMessage(message);
      if (response.message.startsWith("单词导入成功")) setMessage("");
      else throw new Error(response.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <MessageList
        className="message-list"
        lockable={true}
        toBottomHeight={"100%"}
        dataSource={messages
          .map((massage) => JSON.parse(massage.word))
          .map((message) => ({
            position: "left",
            type: "text",
            title: message.ip,
            text: message.text,
            dateString: message.dateString,
          }))}
      />
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
      >
        <div style={{ flexDirection: "row", width: "100%" }}>
          <Input
            style={{
              width: "70%",
            }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="请输入"
          />
          <Button
            style={{
              width: "20%",
              marginLeft: "auto",
            }}
            text="发送"
            onClick={sendMessageHandler}
          />
        </div>
      </div>
    </div>
  );
}

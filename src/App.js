import { useEffect, useState } from "react";
import { Button, Input, MessageList } from "react-chat-elements";
import "react-chat-elements/dist/main.css";
import ChatService from "./services/chatService";
import "bootstrap/dist/css/bootstrap.min.css";

const TEST = false;

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
    }, 3000);
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
      className="container"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          height: "90vh",
          overflow: "auto",
        }}
      >
        <MessageList
          dataSource={
            TEST
              ? messagesTest
              : messages
                  .map((massage) => JSON.parse(massage.word))
                  .map((message) => ({
                    position: "left",
                    type: "text",
                    title: message.ip,
                    text: message.text,
                    date: new Date(message.dateString),
                  }))
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div style={{ flex: 1 }}>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="请输入"
          />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <Button text="发送" onClick={sendMessageHandler} />
        </div>
      </div>
    </div>
  );
}

const messagesTest = [
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
  {
    position: "left",
    type: "text",
    title: "title",
    text: "text",
    date: new Date(),
  },
];

import Image from "next/image";

import { Conversation } from "../../types/conversation";
import { Message } from "../../types/message";
import styles from "../../styles/Message.module.css";
import MessageCard from "./MessageCard";
import sendIcon from "../../assets/send.svg";
import { FormEvent, useState } from "react";
import { getMessages, postMessage } from "../../services/api";

type MessageContainerProps = {
  messages: Message[];
  conversation: Conversation;
};
const MessageContainer = ({
  messages,
  conversation,
}: MessageContainerProps) => {
  const lastMessageTime = new Date(conversation.lastMessageTimestamp * 1000);
  const [messageContent, setMessageContent] = useState("");
  const [displayMessages, setDisplayMessage] = useState(messages);

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await postMessage(conversation.id, {
      body: messageContent,
      timestamp: Date.now(),
    });
    if (res) {
      setMessageContent("");
      const messagesList = await getMessages(conversation.id);
      setDisplayMessage(messagesList);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div>
          {conversation.recipientNickname + " - " + conversation.senderNickname}
        </div>
        <div className={styles.lastTime}>
          {"Last message " + lastMessageTime.toLocaleDateString()}
        </div>
      </div>
      <div className={styles.list}>
        {displayMessages.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
            conversation={conversation}
          />
        ))}
      </div>
      <form className={styles.sendMessage} onSubmit={sendMessage}>
        <input
          placeholder="Send message..."
          type="text"
          required
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
        />
        <button type="submit">
          <Image src={sendIcon} alt="send icon" />
        </button>
      </form>
    </div>
  );
};

export default MessageContainer;

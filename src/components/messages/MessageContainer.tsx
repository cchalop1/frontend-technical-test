import { Conversation } from "@/types/conversation";
import { Message } from "@/types/message";
import styles from "@/styles/Message.module.css";
import MessageCard from "./MessageCard";

import sendIcon from "@/assets/send.svg";
import Image from "next/image";

type MessageContainerProps = {
  messages: Message[];
  conversation: Conversation;
};
const MessageContainer = ({
  messages,
  conversation,
}: MessageContainerProps) => {
  const lastMessageTime = new Date(conversation.lastMessageTimestamp * 1000);

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
        {messages.map((message) => (
          <MessageCard
            key={message.id}
            message={message}
            conversation={conversation}
          />
        ))}
      </div>
      <div className={styles.sendMessage}>
        <input placeholder="Send message..." type="text" />
        <button>
          <Image src={sendIcon} alt="send icon" />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;

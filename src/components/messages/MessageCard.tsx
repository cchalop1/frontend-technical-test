import { Conversation } from "@/types/conversation";
import { Message } from "@/types/message";
import styles from "@/styles/Message.module.css";
import { loggedUserId } from "@/pages/_app";

type MessageCardProps = {
  message: Message;
  conversation: Conversation;
};
const MessageCard = ({ message, conversation }: MessageCardProps) => {
  const isMyMessage = message.authorId === loggedUserId;
  const backgroundColor = isMyMessage ? "#4c92ed" : "#e7e7e9";
  const alignSelf = isMyMessage ? "flex-end" : "flex-start";

  return (
    <div className={styles.wrapperCard} style={{ alignSelf }}>
      {!isMyMessage && (
        <div className={styles.name}>{conversation.recipientNickname}</div>
      )}
      <div className={styles.buble} style={{ backgroundColor }}>
        {message.body}
      </div>
    </div>
  );
};

export default MessageCard;

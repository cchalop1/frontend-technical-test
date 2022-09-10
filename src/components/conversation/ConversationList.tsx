import { Conversation } from "@/types/conversation";
import ConversationCard from "./ConversationCard";

import styles from "@/styles/Conversation.module.css";

type ConversationListProps = {
  conversations: Conversation[];
};

const ConversationList = ({ conversations }: ConversationListProps) => {
  return (
    <div className={styles.converstionsWrapper}>
      {conversations.map((conv) => (
        <ConversationCard key={conv.id} conversation={conv} />
      ))}
    </div>
  );
};

export default ConversationList;

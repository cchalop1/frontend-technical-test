import Link from "next/link";
import Image from "next/image";

import { Conversation } from "@/types/conversation";
import styles from "@/styles/Conversation.module.css";
import { getProfilePictureByUserId } from "../../utils/getProfileUser";

type ConversationProps = {
  conversation: Conversation;
};

const ConversationCard = ({ conversation }: ConversationProps) => {
  const lastMessageTime = new Date(conversation.lastMessageTimestamp * 1000);
  const urlProfilePicture = getProfilePictureByUserId(conversation.recipientId);

  return (
    <Link href={"messages/" + conversation.id}>
      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <Image src={urlProfilePicture} alt="profile picture" height={50} width={50} />
        </div>
        <div className={styles.infos}>
          <h3>{conversation.recipientNickname}</h3>
          <div>{lastMessageTime.toLocaleDateString()}</div>
        </div>
      </div>
    </Link>
  );
};

export default ConversationCard;

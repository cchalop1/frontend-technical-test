// TODO: fix import conf
import { Conversation } from "../../types/conversation";


import styles from "../../styles/Conversation.module.css";
import { getProfilePictureByUserId } from "../../utils/getProfileUser";
import Image from "next/image";
import Link from "next/link";

type ConversationProps = {
  conversation: Conversation;
};

const ConversationCard = ({ conversation }: ConversationProps) => {
  // TODO: put this parsing in backend
  const lastMessageTime = new Date(conversation.lastMessageTimestamp * 1000);
  const urlProfilePicture = getProfilePictureByUserId(conversation.recipientId);

  return (
    <Link href={"messages/" + conversation.id}>
      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <img src={urlProfilePicture} alt="profile picture" height={50} />
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

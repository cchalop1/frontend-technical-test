import { useEffect } from "react";
import { GetServerSideProps } from "next";

import MessageContainer from "@/components/messages/MessageContainer";
import styles from "@/styles/Message.module.css";
import { getConversations, getMessages } from "@/services/api";
import { Message } from "@/types/message";
import { Conversation } from "@/types/conversation";
import { loggedUserId } from "../_app";

type MessagesPageProps = {
  messages: Message[];
  conversation: Conversation;
  error: string | undefined;
};

const MessagesPage = ({ messages, conversation, error }: MessagesPageProps) => {
  useEffect(() => {
    if (error) {
      alert("Error with server");
    }
  }, []);
  return (
    <div className={styles.container}>
      <MessageContainer messages={messages} conversation={conversation} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  if (!params || !params.id) {
    return { props: { messages: [], conversation: [], error: "Error" } };
  }
  try {
    const messages = await getMessages(Number(params.id));
    const conversations = await getConversations(loggedUserId);
    const conversation = conversations?.find(
      (conv) => conv.id === Number(params.id)
    );

    return { props: { messages, conversation } };
  } catch (e) {
    return { props: { messages: [], conversation: [], error: "Error" } };
  }
};

export default MessagesPage;

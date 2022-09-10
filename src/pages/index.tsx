import { useEffect } from "react";
import ConversationList from "@/components/conversation/ConversationList";
import { getConversations } from "@/services/api";
import styles from "@/styles/Home.module.css";
import { loggedUserId } from "./_app";

type HomeProps = {
  conversations: [];
  error: string | undefined;
};

const Home = ({ conversations, error }: HomeProps) => {
  useEffect(() => {
    if (error) {
      alert("Error with server");
    }
  }, []);
  return (
    <div className={styles.home}>
      <ConversationList conversations={conversations} />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const conversations = await getConversations(loggedUserId);
    return { props: { conversations } };
  } catch (e) {
    return { props: { conversations: [], error: "Error" } };
  }
}

export default Home;

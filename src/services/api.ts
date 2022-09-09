import { Conversation } from "../types/conversation";
import { Message } from "../types/message";

const API_URL = process.env.NEXT_APP_API_URL;

export const fetchConversations = async (userId: number): Promise<Conversation[]> => {
  const res = await fetch(`${API_URL}/conversations/${userId}`);
  const json = await res.json();
  return json;
};

export const fetchMessages = async (convId: number): Promise<Message[]> => {
  const res = await fetch(`${API_URL}/messages/${convId}`);
  const json = await res.json();
  return json;
};

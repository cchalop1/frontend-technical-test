import { Conversation } from "../types/conversation";
import { Message } from "../types/message";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getConversations = async (
  userId: number
): Promise<Conversation[]> => {
  const res = await fetch(`${API_URL}/conversations/${userId}`);
  const json = await res.json();
  return json;
};

export const getMessages = async (convId: number): Promise<Message[]> => {
  const res = await fetch(`${API_URL}/messages/${convId}`);
  const json = await res.json();
  return json;
};

type BodyPostMessage = {
  body: string;
  timestamp: number;
};

export const postMessage = async (convId: number, body: BodyPostMessage) => {
  const option: RequestInit = {
    method: "POST",
    headers: {
      ContentType: "application/json",
    },
    body: JSON.stringify(body),
  };
  const url = `${API_URL}/messages/${convId}`;
  const res = await fetch(url, option);
  const json = await res.json();
  return json;
};

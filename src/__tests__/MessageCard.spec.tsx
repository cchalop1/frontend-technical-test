import { render, screen } from "@testing-library/react";
import MessageCard from "../components/messages/MessageCard";
import { Conversation } from "../types/conversation";
import { Message } from "../types/message";

const conversation: Conversation = {
  id: 1,
  recipientId: 2,
  recipientNickname: "Jeremie",
  senderId: 1,
  senderNickname: "Thibaut",
  lastMessageTimestamp: 1625637849,
};

const message: Message = {
  id: 1,
  conversationId: 1,
  timestamp: 1625637849,
  authorId: 1,
  body: "Bonjour c'est le premier message de la première conversation",
};

describe("MessageCard", () => {
  it("should render the body of the message", async () => {
    render(<MessageCard conversation={conversation} message={message} />);
    const recipientNickname = await screen.findByText(message.body);
    expect(recipientNickname).toBeInTheDocument();
  });

//   it("should display a profile picture with good url", async () => {
//     render(<MessageCard conversation={conversation} />);
//     const img = await screen.findByRole("img");
//     expect(img).not.toBe(undefined);
//     expect(img.src).toBe("https://avatars.dicebear.com/api/open-peeps/2.svg");
//   });

//   it("should display a time of the last message have been send", async () => {
//     render(<MessageCard conversation={conversation} />);
//     const time = await screen.findByText("7/7/2021");
//     expect(time).toBeInTheDocument();
//   });
});

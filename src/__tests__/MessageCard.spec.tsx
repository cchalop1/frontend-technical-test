import { render, screen } from "@testing-library/react";
import { getLoggedUserId } from "@/utils/getLoggedUserId";
import MessageCard from ".@/components/messages/MessageCard";
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

const jeremieMessage: Message = {
  id: 1,
  conversationId: 1,
  timestamp: 1625637849,
  authorId: 2,
  body: "Bonjour c'est le premier message de la première conversation",
};

describe("MessageCard", () => {
  it("should render the body of the message", async () => {
    render(<MessageCard conversation={conversation} message={message} />);
    const messageBody = await screen.findByText(message.body);
    expect(messageBody).toBeInTheDocument();
  });

  it("should render a gray background color if is not my message", async () => {
    render(<MessageCard conversation={conversation} message={message} />);
    const messageBody = await screen.findByText(message.body);
    expect(messageBody.style.backgroundColor).toBe("rgb(76, 146, 237)");
  });

  it("should render a gray background color if is my message", async () => {
    render(<MessageCard conversation={conversation} message={jeremieMessage} />);
    const messageBody = await screen.findByText(message.body);
    expect(messageBody.style.backgroundColor).toBe("rgb(231, 231, 233)");
  });

  it("should render the nickname of the sender", async () => {
    render(
      <MessageCard conversation={conversation} message={jeremieMessage} />
    );
    const nickname = await screen.findByText("Jeremie");
    expect(nickname).toBeInTheDocument();
  });

  it("should not render my name if im the sender of this message", async () => {
    const {container} = render(<MessageCard conversation={conversation} message={message} />);
    const nickname = container.getElementsByClassName("name");
    expect(nickname.length).toBe(0);
  });
});

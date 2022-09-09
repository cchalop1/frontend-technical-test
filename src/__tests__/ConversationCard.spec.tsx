import { render, screen } from "@testing-library/react";
import ConversationCard from "../components/conversation/ConversationCard";
import { Conversation } from "../types/conversation";

const conversation: Conversation = {
  id: 1,
  recipientId: 2,
  recipientNickname: "Jeremie",
  senderId: 1,
  senderNickname: "Thibaut",
  lastMessageTimestamp: 1625637849,
};

describe("ConversationCard", () => {
  it("should render the nickname if recipient", async () => {
    render(<ConversationCard conversation={conversation} />);
    const recipientNickname = await screen.findByText("Jeremie");
    expect(recipientNickname).toBeInTheDocument();
  });

  it("should display a profile picture with good url", async () => {
    render(<ConversationCard conversation={conversation} />);
    const img = await screen.findByRole("img");
    expect(img).not.toBe(undefined);
    expect(img.src).toBe("https://avatars.dicebear.com/api/open-peeps/2.svg");
  });

  it("should display a time of the last message have been send", async () => {
    render(<ConversationCard conversation={conversation} />);
    const time = await screen.findByText("7/7/2021");
    expect(time).toBeInTheDocument();
  });
});

import { useState } from "react";

function Chatbot() {
  const [userMessage, setUserMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  async function handleSendMessage() {
    const reply = await sendMessageToAgent(userMessage);
    setAiResponse(reply);
  }

  return (
    <div>
      <input
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        placeholder="Pose ta question"
      />
      <button onClick={handleSendMessage}>Envoyer</button>

      <div>
        <strong>Agent IA :</strong> {aiResponse}
      </div>
    </div>
  );
}

export default Chatbot;

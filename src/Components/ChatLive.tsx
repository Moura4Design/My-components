import { useEffect, useState } from "react";

type Message = { id: string; text: string; };

export default function ChatLive() {
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!connected) return;
    const id = setInterval(() => {
      setMessages((msgs) => [
        { id: Math.random().toString(36), text: "Update"},
        ...msgs,
      ]);
    }, 1000);
    return () => clearInterval(id);
  }, [connected]);

  const send = () => {
    if (!input) return;
    setMessages((msgs) => [
      { id: Math.random().toString(36), text: "Echo - " + input },
      ...msgs,
    ]);
    setInput("");
  };

  return (
    <div>
      <h1>Realtime Mock</h1>
      <button onClick={() => setConnected((c) => !c)}>
        {connected ? "Disconnect" : "Connect"}
      </button>

      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send message"
        />
        <button onClick={send}>
          Send
        </button>
      </div>

      <div>
        {messages.length === 0 && <div>No messages</div>}
        {messages.map((m) => (
          <div key={m.id}>
            {m.text}
          </div>
        ))}
      </div>
    </div>
  );
}
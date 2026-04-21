"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

const SUGGESTED_PROMPTS = [
  "Fun date night in Capitol Hill",
  "Something chill with live music",
  "Best spots open after 10pm",
  "Birthday dinner ideas nearby",
];

const PLACEHOLDER_REPLY =
  "I'm pulling together some options for you — this feature is coming soon. In the meantime, check out the Home tab for tonight's best picks.";

export default function ForYouPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", text: trimmed };
    const replyMsg: Message = { id: (Date.now() + 1).toString(), role: "assistant", text: PLACEHOLDER_REPLY };

    setMessages((prev) => [...prev, userMsg, replyMsg]);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    // Auto-grow textarea
    e.target.style.height = "auto";
    e.target.style.height = `${Math.min(e.target.scrollHeight, 140)}px`;
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="flex flex-col h-[calc(100vh-112px)]">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {isEmpty ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center h-full gap-6 pb-4">
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-900 mb-1">What are you looking for?</h2>
              <p className="text-sm text-gray-500">Ask anything — I&apos;ll find the right plan.</p>
            </div>
            <div className="flex flex-col gap-2 w-full max-w-xs">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => send(prompt)}
                  className="text-left text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors px-4 py-3 rounded-2xl"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Message thread */
          <div className="flex flex-col gap-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gray-900 text-white rounded-br-sm"
                      : "bg-gray-100 text-gray-800 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
        )}
      </div>

      {/* Input bar */}
      <div className="px-4 pb-3 pt-2 border-t border-gray-100 bg-white">
        <div className="flex items-end gap-2 bg-gray-100 rounded-3xl px-4 py-2">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything..."
            rows={1}
            className="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-400 resize-none outline-none leading-relaxed py-1.5"
            style={{ maxHeight: 140 }}
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim()}
            className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors mb-0.5 ${
              input.trim() ? "bg-gray-900 text-white" : "bg-gray-300 text-gray-400 cursor-not-allowed"
            }`}
          >
            <ArrowUp className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>
        <p className="text-center text-[11px] text-gray-400 mt-2">Press Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  );
}

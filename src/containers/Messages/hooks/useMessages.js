import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { useState, useEffect } from "react";
// import { MessengerClient } from "messenger/MessengerServiceClientPb";

export const useMessages = (client) => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const stream$ = client.getMessages(new Empty());
    stream$.on("data", m => {
      setMessages(state => [...state, m.getMessage()]);
    });
  }, [client]);

  return {
    messages
  };
};
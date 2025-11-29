import { useState } from "react";
import type { User } from "./types/User";
import UserProfile from "./components/UserProfile";
import MiniBank from "./components/MiniBank";

export default function App() {
  const [user, setUser] = useState<User>({
    name: "",
    age: 0,
    isSubscribed: true
  });

  return(
    <>
      <UserProfile user={user} setUser={setUser}/>
      <MiniBank />
    </>
  );
};

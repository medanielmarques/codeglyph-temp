import { db } from "@/server/db";
import { api } from "@/utils/api";
import { customAlphabet } from "nanoid";
import { signIn } from "next-auth/react";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  console.log(hello.data?.idk);

  console.log(customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 12)());

  return (
    <div>
      <div>{hello.data?.greeting}</div>
      {/* <div>{hello.data?.idk}</div> */}
      <button onClick={() => signIn("discord")}>sign in</button>
    </div>
  );
}

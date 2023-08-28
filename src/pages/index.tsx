import { supabase } from "@/server/db";
import { api } from "@/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  // console.log(hello.data?.idk);

  const idk = async () => await supabase.auth.getUser();

  console.log(idk());

  async function signIn() {
    await supabase.auth.signInWithOAuth({
      provider: "discord",
      // options
    });
  }

  async function signInWithEmail() {
    await supabase.auth.signInWithOtp({
      email: "me@danielmarques.dev",
      // options
    });
  }

  return (
    <div>
      <div>{hello.data?.greeting}</div>
      <button onClick={signInWithEmail}>sign in</button>
    </div>
  );
}

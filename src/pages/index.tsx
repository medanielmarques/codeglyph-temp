import { api } from "@/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return <div>{hello.data?.greeting}</div>;
}

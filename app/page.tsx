import Landing from "@/components/Landing";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth();

  let href = userId ? "/journal" : "/new-user";

  return (
    <>
      <Landing href={href} />{" "}
    </>
  );
}

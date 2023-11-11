import Loading from "@/components/Loading";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Whisper } from "next/font/google";

const whisper = Whisper({
  subsets: ["latin"],
  weight: "400",
});

const DashboardLayout = ({ children }: { children: any }) => {
  const links = [
    { name: "Journals", href: "/journal" },
    { name: "History", href: "/history" },
  ];

  return (
    <div className="h-screen w-screen relative  bg-white ">
      <Loading />
      <aside className="absolute w-[200px] h-full top-0 left-0   ">
        <div className="px-4 my-4">
          <span className={`text-3xl ${whisper.className} `}>MOOD</span>
        </div>
        <div>
          <ul className="px-4">
            {links.map((link) => (
              <li key={link.name} className="text-xl my-4">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="ml-[200px] h-full  ">
        <header className="h-[60px] border-b border-orange-400 ">
          <div className="h-full w-full px-6 flex items-center justify-end ">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;

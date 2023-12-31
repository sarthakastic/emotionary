import Loading from "@/components/Loading";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Tapestry, Carattere } from "next/font/google";

const carattere = Carattere({ subsets: ["latin"], weight: "400" });

const whisper = Tapestry({
  subsets: ["latin"],
  weight: "400",
});

const DashboardLayout = ({ children }: { children: any }) => {
  const links = [
    { name: "Journals", href: "/journal" },
    { name: "History", href: "/history" },
  ];

  return (
    <div
      className={`h-screen w-screen relative  bg-white ${carattere.className} `}
    >
      <Loading />
      {/* <aside className="absolute w-[200px] h-full top-0 left-0   ">
        <div className="px-4 my-4 bg-orange-200 w-28 rounded-r-full ">
          <span className={`text-3xl ${whisper.className}   `}>Emotionary</span>
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
      </aside> */}
      <div className=" h-full  ">
        <div className="flex w-screen fixed top-0 bg-white justify-between items-center border-b border-orange-400  ">
          <div className=" bg-orange-200 w-28 rounded-r-full ">
            <span className={`text-xl md:text-3xl ${whisper.className}   `}>
              Emotionary
            </span>
          </div>
          <div>
            <ul className="px-4 flex gap-4 ">
              {links.map((link) => (
                <li
                  key={link.name}
                  className="text-xl my-4 hover:underline hover:text-orange-400 decoration-orange-400 hover:scale-150 hover:mx-4 "
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <header className="h-[60px] ">
            <div className="h-full w-full px-6 flex items-center justify-end ">
              <UserButton />
            </div>
          </header>
        </div>
        <div className="h-[calc(100vh-60px)] ">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;

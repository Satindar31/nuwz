import Link from "@/components/ui/link";
import Hero from "./Hero";
import Important from "./Important";
import Pricing from "./Pricing";

const MadeWith = [
  {
    name: "Next.js",
    link: "https://nextjs.org",
  },
  {
    name: "Shadcn",
    link: "https://ui.shadcn.com/",
  },
  {
    name: "Clerk Auth",
    link: "https://clerk.com/",
  },
  {
    name: "Prisma ORM",
    link: "https://www.prisma.io/",
  },
  {
    name: "Cockroach DB",
    link: "https://www.cockroachlabs.com/",
  }
]

export default function HomePage() {
  return (
    <div className="w-screen p-8 min-h-screen flex flex-col gap-8 [background:repeating-linear-gradient(to_bottom,#F9731621_10rem,white,_#F9731621)]">
      <Hero />
      <Pricing />
      <Important />

      <footer className="py-8 px-4 bg-black/5 rounded-xl flex flex-col items-center justify-center gap-2">
        <p>
          Made by <Link href="https://chill31.vercel.app" inverse>Chill31</Link>
        </p>
        <p className="flex items-center justify-start gap-2 flex-wrap">
          Made Using:

          {MadeWith.map((item, index) => (
            <Link key={index} href={item.link} inverse>{item.name}</Link>
          ))}
        </p>
      </footer>
    </div>
  );
}

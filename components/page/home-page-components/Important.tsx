import Link from "@/components/ui/link";
import Heading from "../Heading";

export default function Important() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 min-h-96 my-10">
      <Heading>Important</Heading>
      <p className="text-center max-w-[65ch] text-lg leading-8">This is <span className="text-red-500 font-bold">NOT</span> a fully functional web app. The pricing and payment features are just for show. This app can only do the things listed in the <span className="font-medium text-primary">Free</span> plan. This website is not made for professional use, and never will be. The only purpose this website serves is for <Link href="https://chill31.vercel.app" inverse>me</Link> to learn a few more things about making (partially-functioning) fullstack websites.</p>
    </section>
  );
}
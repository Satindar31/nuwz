export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center gap-2 w-full">
        <h1 className="md:text-9xl text-7xl text-primary font-extrabold">Nuwz<span className="text-black">.</span></h1>
        <p className="md:text-lg text-base max-w-[30ch] text-center mr-2">Stay informed with the latest headlines and personalized topics that matter most to <span className="text-primary">you</span>.</p>
    </section>
  );
}

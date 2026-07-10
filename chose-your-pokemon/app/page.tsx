import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start gap-5 pt-21 font-sans bg-cyan-50">
        <div className="flex flex-grid items-start text-center sm:items-start sm:text-left">
        <Image
        className="-mt-5"
          src="/meowth.png"
          alt="Next.js logo"

          width={100}
          height={20}
        />
          <h1 className="text-5xl font-pokemon text-center tracking-tight text-black">
            Welcome to Pokemon Chooser!
          </h1>
        </div>
        <div className="flex flex-col items-center gap-4 text-2xl font-medium sm:flex-row">
        <Image
              src="/piplup.png"
              alt="Vercel logomark"
              width={100}
              height={20}
            />
          <a
            className="items-center justify-center flex h-12 w-full gap-2 rounded-full bg-foreground px-15 text-background transition-colors hover:bg-[#383838] sm:w-auto"
            href="/quiz"
          >
            Start Quiz!
          </a>
        </div>
    </div>
  );
}

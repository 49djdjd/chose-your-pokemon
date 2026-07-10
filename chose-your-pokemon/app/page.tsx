import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-start gap-5 pt-21 font-sans bg-cyan-50">
        <div className="flex flex-grid items-start text-center sm:items-start sm:text-left">
        <Image
        className="-mt-5 hover:animate-bounce"
          src="/meowth.png"
          alt="Next.js logo"

          width={150}
          height={40}
        />
          <h1 className="text-8xl p-5 bg-clip-text hover:text-transparent hover:bg-linear-to-r from-blue-500 via blue-50 to-amber-300 font-pokemon text-center text-black ">
            Welcome to Pokemon Chooser!
          </h1>
        </div>
        <div className="flex flex-col items-center mt-60 gap-4 text-5xl font-medium sm:flex-row">
        <Image
            className="hover:animate-bounce"
              src="/piplup.png"
              alt="Vercel logomark"
              width={100}
              height={20}
            />
          <a
            className="items-center justify-center flex h-15 w-full gap-2 rounded-full bg-foreground px-15 text-background transition-colors hover:bg-[#383838] sm:w-auto"
            href="/quiz"
          >
            Start Quiz!
          </a>
        </div>
    </div>
  );
}

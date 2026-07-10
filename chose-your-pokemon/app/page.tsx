import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-cyan-50">
        <div className="flex flex-grid items-center text-center sm:items-start sm:text-left">
        <Image
          src="/meowth.png"
          alt="Next.js logo"
          width={100}
          height={20}
        />
          <h1 className="text-5xl font-semibold text-center tracking-tight text-black">
            Welcome to Pokemon Chooser!
          </h1>
        </div>
        <p className="max-w-md text-lg leading-8 text-zinc-600">
            I wanted to create this website because I have recently been playing Pokemon X and I wanted to try a project with an API!
          </p>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        <Image
              src="/piplup.png"
              alt="Vercel logomark"
              width={100}
              height={20}
            />
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-15 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/layout.tsx"
            target="_blank"
          >
            Start Quiz!
          </a>
        </div>
    </div>
  );
}

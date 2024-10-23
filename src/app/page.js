import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="items-center flex flex-col row-start-2 items-center">
            <Image
              src="/images/profile.jpg"
              width={250}
              height={250}
              priority
            />
          <li className="mb-2 text-center">
            This is my homepage
          </li>
          <li>It's not very interesting</li>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/eggp.webp"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            About me
          </a>
        </div>
      </main>
     
    </div>
  );
}

import DaisyLogo from "./daisyui-logo";
import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";
import Swap from "./swap";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >
          <SupabaseLogo />
        </a>
        <span className="border-l rotate-45 h-6" />
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          <NextLogo />
        </a>
        <span className="border-l rotate-45 h-6" />
        <a href="https://daisyui.com/" target="_blank" rel="noreferrer">
          <DaisyLogo />
        </a>
      </div>
      <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
      <div className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center font-semibold">
        The fastest way to{" "}
        <span className="font-bold underline">never launch</span> your SaaS
        ideas
        <Swap />
      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}

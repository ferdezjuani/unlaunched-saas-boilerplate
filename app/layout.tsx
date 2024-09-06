import GetOnGithubButton from "@/components/get-github-button";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Unlaunched Saas Boilerplate",
  description: "The fastest way to never launch your Saas ideas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold">
                    <Link href={"/"} className="font-bold">Unlaunched Saas Boilerplate</Link>
                    <div className="flex items-center gap-2">
                      <GetOnGithubButton />
                    </div>
                  </div>
                </div>
              </nav>
              <div className="flex flex-col gap-20 max-w-5xl p-5">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-8">
                <p>
                  {" "}
                  <a
                    href="https://x.com/ferdezjuani"
                    target="_blank"
                    className="font-bold hover:underline"
                    rel="noreferrer"
                  >
                    @ferdezjuani
                  </a>
                </p>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

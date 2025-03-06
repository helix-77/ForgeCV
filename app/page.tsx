import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Features } from "@/components/features";
import { TemplateShowcase } from "@/components/TemplateShowcase";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl">
              ForgeCV
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/builder">
              <Button variant="outline">Create</Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Build Your Professional CV/Resume
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Create ATS-friendly resume/cv with our modern templates. Stand
                  out to recruiters and land your dream job.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/builder">
                  <Button
                    size="lg"
                    className="text-white bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800"
                  >
                    Get Started
                  </Button>
                </Link>
                <TemplateShowcase />
              </div>
            </div>
          </div>
        </section>

        <Features />
      </main>
      <footer className="w-full border-t py-6 bg-background/80 backdrop-blur">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} ForgeCV. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

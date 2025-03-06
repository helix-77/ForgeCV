import { FileText, Layers, Palette, Zap } from "lucide-react"

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to create a professional, ATS-friendly resume
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
            <Zap className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">ATS-Friendly</h3>
            <p className="text-center text-muted-foreground">
              Optimized templates that pass through Applicant Tracking Systems
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
            <Palette className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Dark & Light Mode</h3>
            <p className="text-center text-muted-foreground">Customize your editing experience with theme options</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
            <Layers className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Multiple Templates</h3>
            <p className="text-center text-muted-foreground">Choose from Harvard, MIT, Oxford, and custom formats</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
            <FileText className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Multi-Page Support</h3>
            <p className="text-center text-muted-foreground">Create comprehensive resumes with multiple page support</p>
          </div>
        </div>
      </div>
    </section>
  )
}


export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          Meeting Intelligence,
          <span className="text-blue-600"> Privacy First</span>
        </h1>
        
        <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
          Real-time transcription and AI-powered summaries for your meetings. 
          Your data stays yours—no storage, complete privacy.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a 
            href="#contact" 
            className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Start Free Trial
          </a>
          <a 
            href="#features" 
            className="rounded-lg border-2 border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Learn More
          </a>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          🔒 Zero data storage • End-to-end privacy • GDPR compliant
        </p>
      </section>
    </main>
  )
}
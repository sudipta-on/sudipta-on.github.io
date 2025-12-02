export default function Dashboard() {
  const ga = "https://analytics.google.com/";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-4xl font-bold mb-6">Analytics Dashboard</h1>

      <p className="text-slate-300 max-w-lg text-center mb-10">
        Detailed analytics for your website are available in Google Analytics.
        Click the button below to open the dashboard.
      </p>

      <a
        href={ga}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 
        transition-all duration-300 font-semibold text-lg backdrop-blur-xl"
      >
        Open Google Analytics
      </a>
    </section>
  );
}

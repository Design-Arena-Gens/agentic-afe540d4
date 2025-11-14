import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI LinkedIn Daily Posts',
  description: 'Auto-generates LinkedIn-ready AI trend posts with images',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-slate-50">
      <body className="min-h-full text-slate-800 antialiased">
        <div className="mx-auto max-w-3xl p-6">
          <header className="flex items-center justify-between gap-4 py-4">
            <h1 className="text-xl font-semibold tracking-tight">AI LinkedIn Daily Posts</h1>
            <a
              href="https://agentic-afe540d4.vercel.app"
              className="text-sm text-brand hover:text-brand-dark"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          </header>
          {children}
          <footer className="mt-16 text-center text-xs text-slate-500">
            Built for daily professional AI insights.
          </footer>
        </div>
      </body>
    </html>
  );
}

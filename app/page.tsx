import Link from 'next/link';
import { fetchTrendingAITopics } from '@/lib/trends';
import { generateLinkedInPost } from '@/lib/postGenerator';

function formatDate(d = new Date()) {
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function Page({ searchParams }: { searchParams?: Record<string, string | string[]> }) {
  const seed = typeof searchParams?.seed === 'string' ? searchParams.seed : '';
  const topic = await fetchTrendingAITopics();
  const post = generateLinkedInPost(topic);

  const imageUrl = `/api/image?title=${encodeURIComponent(post.title)}&keyword=${encodeURIComponent(topic.keyword)}`;

  return (
    <main className="space-y-8">
      <section className="space-y-2">
        <p className="text-sm text-slate-500">Daily AI Brief ? {formatDate()}</p>
        <h2 className="text-2xl font-semibold">LinkedIn Post (Copy & publish)</h2>
        <div className="prose-card">
          {post.text}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="button" onClick={async () => { await navigator.clipboard.writeText(`"${post.text}"`); }}>
            Copy text
          </button>
          <a href={imageUrl} className="button-secondary" target="_blank">Open image</a>
          <Link className="text-sm text-slate-500 hover:text-slate-700" href={`/?seed=${Date.now()}`} prefetch={false}>Regenerate</Link>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="mb-2 text-sm font-semibold text-slate-700">Preview</h3>
          <img src={imageUrl} alt="AI Post Image" className="w-full rounded-lg border" />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="mb-2 text-sm font-semibold text-slate-700">Topic & Sources</h3>
          <p className="text-sm"><span className="font-medium">Keyword:</span> {topic.keyword}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            {topic.articles.map((a, i) => (
              <li key={i} className="truncate"><a href={a.link} target="_blank" rel="noreferrer" className="text-brand hover:text-brand-dark">{a.title}</a> <span className="text-slate-500">? {a.source}</span></li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-slate-500">Auto-curated from reputable AI feeds. Tailor text before posting to add your POV.</p>
        </div>
      </section>
    </main>
  );
}

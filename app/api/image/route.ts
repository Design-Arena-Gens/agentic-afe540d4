import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'AI Daily Brief';
  const keyword = searchParams.get('keyword') || 'AI';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg,#0A66C2 0%,#6aa5ff 100%)',
          color: 'white',
          padding: 64,
          fontSize: 36,
          fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial'
        }}
      >
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: 'rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 40,
            }}
          >
            ??
          </div>
          <div style={{ fontSize: 28, opacity: 0.95 }}>AI Daily ? LinkedIn Ready</div>
        </div>

        <div style={{ fontSize: 56, fontWeight: 800, lineHeight: 1.1, textShadow: '0 8px 24px rgba(0,0,0,0.25)' }}>
          {title.length > 110 ? title.slice(0, 107) + '?' : title}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: 28, opacity: 0.9 }}>Keyword: {keyword.toUpperCase()}</div>
          <div style={{ fontSize: 22, opacity: 0.9 }}>agentic-afe540d4.vercel.app</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

import { Ticker } from "@/components/Ticker";

export default async function Home() {
  const response = await fetch(
    "https://app.incident.io/api/status_page_content/game-days/incidents/01H0JR44W6VQ1R4PTA97R21WTX",
    { next: { revalidate: 30 } }
  );
  const headers = Object.fromEntries(response.headers.entries());

  return (
    <main>
      <section>
        <div>
          Server component received
          <pre>{response.status}</pre>
        </div>
        <div>
          Headers: <pre>{JSON.stringify(headers, undefined, 2)}</pre>
        </div>
      </section>
      <section>
        <Ticker />
      </section>
    </main>
  );
}

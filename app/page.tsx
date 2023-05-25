import { Ticker } from "@/components/Ticker";

export default async function Home() {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/London",
    { next: { revalidate: 30 } }
  );
  const { datetime } = await response.json();
  const headers = Object.fromEntries(response.headers.entries());

  return (
    <main>
      <section>
        <div>
          Server component time is <br />
          <pre>{datetime}</pre>
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

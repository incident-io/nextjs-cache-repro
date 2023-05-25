"use client";

import { useEffect, useState } from "react";

export const Ticker = () => {
  const [resp, setResp] = useState<{
    response: { datetime: string };
    headers: Record<string, string>;
  } | null>(null);

  useEffect(() => {
    const refetch = async () => {
      const res = await fetch("/api");
      setResp(await res.json());
    };

    // Kick one off now
    refetch();

    // Every 5 seconds, ping our proxy API
    const intervalId = setInterval(() => refetch(), 5000);
    return () => clearInterval(intervalId);
  }, []);

  if (!resp) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        Loaded via Route Handler time is <br />
        <pre>{resp.response.datetime}</pre>
      </div>
      <div>
        Headers seen in Route Handler are{" "}
        <pre>{JSON.stringify(resp.headers, undefined, 2)}</pre>
      </div>
    </>
  );
};

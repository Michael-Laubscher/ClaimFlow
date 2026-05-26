import { EmptyState } from "@/features/shared-ui/components/sections/EmptyState";
import { ResultState } from "@/features/shared-ui/components/sections/ResultState";
import { MOCK_CLAIM } from "@/mock/data/mockClaim";
import { useState } from "react";

export default function TrackClaimPage() {
  const [input, setInput] = useState("");
  const [claim, setClaim] = useState<any>(null);
  const [error, setError] = useState("");

  const handleTrack = () => {
    if (!input.trim()) {
      setError("Please enter a claim number.");
      setClaim(null);
      return;
    }
    setError("");
    setClaim(MOCK_CLAIM);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">


      <main className="flex-1">
        {claim ? (
          <ResultState
            value={input}
            onChange={setInput}
            onTrack={handleTrack}
            claim={claim}
          />
        ) : (
          <>
            <EmptyState
              value={input}
              onChange={setInput}
              onTrack={handleTrack}
            />

            {error && (
              <p className="text-center text-sm text-red-500 -mt-10">
                {error}
              </p>
            )}
          </>
        )}
      </main>

      
    </div>
  );
}

import { useEffect, useState } from "react";

const loadingMessages = [
  "Curating your next favorite look...",
  "Finding your personal aesthetic...",
  "A little inspiration goes a long way...",
  "Making style feel effortless...",
  "Your style journey is ready!",
];

export default function LoadingScreen({
  onComplete,
  duration = 1000,
}) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min(
        100,
        Math.floor((elapsed / duration) * 100)
      );

      setProgress(percentage);

      if (percentage >= 100) {
        clearInterval(progressInterval);
        onComplete?.();
      }
    }, 30);

    const messageInterval = setInterval(() => {
      setMessageIndex((current) =>
        current >= loadingMessages.length - 2 ? 0 : current + 1
      );
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [duration, onComplete]);

  return (
    <main className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f5f0] px-5 text-[#252820]">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-32 h-80 w-80 rounded-full border border-[#dce3d3]"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full border border-[#dce3d3]"
      />

      <div className="relative flex w-full max-w-md flex-col items-center text-center">
        {/* Animated emblem */}
        <div className="relative grid h-28 w-28 place-items-center">
          <div className="absolute inset-0 animate-spin rounded-full border border-[#c7d1bd] border-t-[#899779]" />

          <div className="absolute inset-3 animate-[spin_8s_linear_infinite_reverse] rounded-full border border-dashed border-[#b8c5ac]" />

          <div className="grid h-16 w-16 place-items-center rounded-full bg-[#dce3d3] shadow-sm">
            <span className="animate-pulse text-4xl text-[#59664e]">
              ✧
            </span>
          </div>
        </div>

        {/* Brand */}
        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.4em] text-[#899779]">
          Your personal style companion
        </p>

        <h1 className="mt-3 text-6xl font-black tracking-[-0.08em] sm:text-7xl">
          forma<span className="font-serif italic text-[#899779]">.</span>
        </h1>

        <p className="mt-4 max-w-xs font-serif text-xl italic text-[#77796f]">
          Discover the art of being you.
        </p>

        {/* Progress bar and percentage */}
        <div className="mt-10 w-full max-w-[280px]">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#899779]">
              Preparing your style
            </span>

            <span className="text-sm font-bold tabular-nums text-[#252820]">
              {progress}%
            </span>
          </div>

          <div
            className="h-1.5 w-full overflow-hidden rounded-full bg-[#e5e3da]"
            role="progressbar"
            aria-label="Loading your style experience"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <div
              className="h-full rounded-full bg-[#899779] transition-[width] duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p
            aria-live="polite"
            className="mt-5 min-h-5 text-xs tracking-wide text-[#77796f]"
          >
            {progress === 100
              ? loadingMessages[loadingMessages.length - 1]
              : loadingMessages[messageIndex]}
          </p>
        </div>

        {/* Bottom detail */}
        <div className="mt-12 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#a0a196]">
          <span className="h-px w-8 bg-[#d4d6ca]" />
          Style begins with you
          <span className="h-px w-8 bg-[#d4d6ca]" />
        </div>
      </div>
    </main>
  );
}

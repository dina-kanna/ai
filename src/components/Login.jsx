
import { useState } from "react";

const DEMO_EMAIL = "demo@forma.com";
const DEMO_PASSWORD = "FormaDemo123";

export default function Login({ onNavigate, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function fillDemo() {
    setEmail(DEMO_EMAIL);
    setPassword(DEMO_PASSWORD);
    setError("");
  }

  function submit(event) {
    event.preventDefault();
    setError("");

    const normalizedEmail = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (normalizedEmail === DEMO_EMAIL) {
      if (password !== DEMO_PASSWORD) {
        setError("Incorrect demo password. Please use the demo credentials below.");
        return;
      }
    } else {
      setError(
        "This demo only supports demo@forma.com. Real accounts require authentication to be configured."
      );
      return;
    }

    if (typeof onSuccess !== "function") {
      setError("Login setup error: onSuccess is missing in App.jsx.");
      return;
    }

    setLoading(true);

    // This is demo-only frontend authentication.
    window.setTimeout(() => {
      onSuccess({
        name: "Forma Guest",
        email: normalizedEmail,
      });
    }, 400);
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f5f0] px-4 py-8 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full border border-[#dce3d3]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full border border-[#dce3d3]"
      />

      <div className="relative grid w-full max-w-full overflow-hidden rounded-[2rem] bg-white shadow-2xl md:grid-cols-2">
        <section className="relative hidden min-h-[650px] overflow-hidden bg-[#30372a] md:block">
          <img
            src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85"
            alt="Fashion editorial"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/20" />

          <div className="absolute left-8 top-8 rounded-full border border-white/30 bg-white/15 px-4 py-3 text-xs tracking-widest text-white backdrop-blur">
            ✳ FORMA STYLE STUDIO
          </div>

          <div className="absolute bottom-10 left-8 right-8 text-white">
            <p className="text-xs uppercase tracking-[0.25em] text-white/70">
              YOUR STYLE JOURNEY
            </p>

            <h2 className="mt-4 text-5xl font-medium leading-tight">
              Style begins
              <br />
              with <span className="font-serif italic">you.</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/80">
              Find your aesthetic. Explore fresh combinations. Make every
              outfit feel like you.
            </p>
          </div>
        </section>

        <section className="flex items-center px-6 py-10 sm:px-12 sm:py-14">
          <div className="mx-auto w-full max-w-md">
            <button
              type="button"
              onClick={() => onNavigate?.("home")}
              className="mb-8 text-sm text-[#77796f] hover:text-[#252820]"
            >
              ← Back to home
            </button>

            <div className="mb-7 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#dce3d3] text-2xl text-[#59664e]">
                 ✧
              </span>
              <span className="text-3xl font-black tracking-tight">
                forma<span className="text-[#899779]">.</span>
              </span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#899779]">
              Welcome back
            </p>

            <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Your style awaits.
            </h1>

            <p className="mt-3 text-sm leading-6 text-[#77796f]">
              Sign in to continue exploring your personal style.
            </p>

            <div className="mt-7 rounded-2xl border border-[#dce3d3] bg-[#f2f4ed] p-4">
              <p className="font-semibold text-[#34382e]">
                ✨ Try the demo account
              </p>

              <p className="mt-3 text-xs text-[#77796f]">Email</p>
              <p className="text-sm font-medium">{DEMO_EMAIL}</p>

              <p className="mt-2 text-xs text-[#77796f]">Password</p>
              <p className="text-sm font-medium">{DEMO_PASSWORD}</p>

              <button
                type="button"
                onClick={fillDemo}
                className="mt-4 rounded-full bg-[#252820] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#454b3d]"
              >
                Fill demo credentials
              </button>
            </div>

            <form onSubmit={submit} className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="login-email"
                  className="text-sm font-semibold"
                >
                  Email address
                </label>

                <input
                  id="login-email"
                  type="email"
                  autoComplete="username"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-[#dedfd4] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#899779] focus:ring-4 focus:ring-[#899779]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="login-password"
                  className="text-sm font-semibold"
                >
                  Password
                </label>

                <div className="relative mt-2">
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-[#dedfd4] bg-white px-4 py-3.5 pr-20 text-sm outline-none focus:border-[#899779] focus:ring-4 focus:ring-[#899779]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs text-[#77796f] hover:bg-[#eeede6]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#252820] py-4 text-sm font-bold text-white transition hover:bg-[#454b3d] disabled:opacity-60"
              >
                {loading ? "Signing you in..." : "Sign in to Forma →"}
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-[#77796f]">
              New to Forma?{" "}
              <button
                type="button"
                onClick={() => onNavigate?.("signup")}
                className="font-semibold text-[#59664e] underline underline-offset-4"
              >
                Create an account
              </button>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

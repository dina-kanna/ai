
import { useState } from "react";

export default function Signup({ onNavigate, onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function submit(event) {
    event.preventDefault();
    setError("");

    if (name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirm) {
      setError("Your passwords do not match.");
      return;
    }

    setLoading(true);

    // Frontend demo only; this does not create a real account.
    window.setTimeout(() => {
      onSuccess?.({
        name: name.trim(),
        email: email.trim(),
      });
      setLoading(false);
    }, 400);
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f5f0] px-4 py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full border border-[#dce3d3]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full border border-[#dce3d3]"
      />

      <section className="relative w-full max-w-lg rounded-[2rem] border border-white bg-white p-6 shadow-[0_25px_80px_rgba(37,40,32,0.10)] sm:p-10">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="mb-8 flex items-center gap-2 text-sm text-[#77796f] transition hover:text-[#252820]"
        >
          <span aria-hidden="true">←</span>
          Back to home
        </button>

        <div className="mb-8 flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#dce3d3] text-2xl text-[#59664e]">
          ✧
          </span>
          <span className="text-3xl font-black tracking-[-0.08em] text-[#252820]">
            forma<span className="text-[#899779]">.</span>
          </span>
        </div>

        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#899779]">
          Your style journey starts here
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#252820] sm:text-4xl">
          Create your account.
        </h1>

        <p className="mt-3 text-sm leading-7 text-[#77796f]">
          Discover your personal aesthetic, save your favorite looks, and find
          fresh inspiration every day.
        </p>

        <form onSubmit={submit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="signup-name"
              className="text-sm font-semibold text-[#34382e]"
            >
              Full name
            </label>
            <input
              id="signup-name"
              type="text"
              autoComplete="name"
              required
              minLength={2}
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your name"
              className="mt-2 w-full rounded-xl border border-[#dedfd4] bg-[#fdfdfb] px-4 py-3.5 text-sm outline-none transition focus:border-[#899779] focus:ring-4 focus:ring-[#899779]/10"
            />
          </div>

          <div>
            <label
              htmlFor="signup-email"
              className="text-sm font-semibold text-[#34382e]"
            >
              Email address
            </label>
            <input
              id="signup-email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-[#dedfd4] bg-[#fdfdfb] px-4 py-3.5 text-sm outline-none transition focus:border-[#899779] focus:ring-4 focus:ring-[#899779]/10"
            />
          </div>

          <div>
            <label
              htmlFor="signup-password"
              className="text-sm font-semibold text-[#34382e]"
            >
              Password
            </label>

            <div className="relative mt-2">
              <input
                id="signup-password"
                type={visible ? "text" : "password"}
                autoComplete="new-password"
                required
                minLength={8}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="At least 8 characters"
                className="w-full rounded-xl border border-[#dedfd4] bg-[#fdfdfb] px-4 py-3.5 pr-16 text-sm outline-none transition focus:border-[#899779] focus:ring-4 focus:ring-[#899779]/10"
              />

              <button
                type="button"
                onClick={() => setVisible((current) => !current)}
                aria-label={visible ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-semibold text-[#68705d] hover:bg-[#eeede6]"
              >
                {visible ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="signup-confirm"
              className="text-sm font-semibold text-[#34382e]"
            >
              Confirm password
            </label>
            <input
              id="signup-confirm"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              value={confirm}
              onChange={(event) => setConfirm(event.target.value)}
              placeholder="Enter your password again"
              className="mt-2 w-full rounded-xl border border-[#dedfd4] bg-[#fdfdfb] px-4 py-3.5 text-sm outline-none transition focus:border-[#899779] focus:ring-4 focus:ring-[#899779]/10"
            />
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
            className="w-full rounded-full bg-[#252820] py-4 text-sm font-bold text-white transition hover:bg-[#454b3d] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Creating your account..." : "Create my account →"}
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-[#77796f]">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => onNavigate("login")}
            className="font-bold text-[#59664e] underline underline-offset-4"
          >
            Sign in
          </button>
        </p>

        <p className="mt-8 text-center text-[10px] tracking-[0.2em] text-[#a0a196]">
          YOUR STYLE. YOUR STORY. YOUR FORMA.
        </p>
      </section>
    </main>
  );
}

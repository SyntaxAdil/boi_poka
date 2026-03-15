"use client";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { signIn, setActive } = useSignIn();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const t = (fn, msg) => fn(msg, { autoClose: 1500, theme: "light" });

  const handleRequestReset = async (e) => {
    e.preventDefault();
    if (!email) return t(toast.warning, "Please enter your email");
    setLoading(true);
    try {
      await signIn.create({
        strategy: "reset_password_email_code",
        identifier: email,
      });
      setStep(2);
      t(toast.info, "Reset code sent to your email");
    } catch (err) {
      t(toast.error, err?.errors?.[0]?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!code || !newPassword) return t(toast.warning, "Please fill in all fields");
    if (newPassword.length < 8) return t(toast.error, "Password must be at least 8 characters");
    setLoading(true);
    try {
      const result = await signIn.attemptFirstFactor({
        strategy: "reset_password_email_code",
        code,
        password: newPassword,
      });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        t(toast.success, "Password reset successful!");
        router.push("/listed-books");
      }
    } catch (err) {
      t(toast.error, err?.errors?.[0]?.message || "Invalid code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[60dvh] w-full flex items-center justify-center p-4">
      <div className="bg-base-100 border border-base-200 rounded-2xl shadow-sm w-full md:max-w-md p-8 space-y-6">

        <div className="space-y-1">
          <div className="flex items-center gap-2 mb-4">
            {[1, 2].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  s <= step ? "bg-success" : "bg-base-200"
                }`}
              />
            ))}
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            {step === 1 ? (
              <>Reset your <span className="text-success">password</span></>
            ) : (
              <>Check your <span className="text-success">email</span></>
            )}
          </h1>
          <p className="text-sm text-base-content/50">
            {step === 1
              ? "Enter your email address and we'll send you a reset code."
              : `We sent a reset code to ${email}. Enter it below with your new password.`}
          </p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleRequestReset} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-base-content/70">Email address</label>
              <input
                type="email"
                className="input w-full rounded-xl border-base-300 outline-0 focus:border-success"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-success w-full rounded-xl text-white font-medium hover:bg-success/90 transition-all"
            >
              {loading ? "Sending..." : "Send Reset Code →"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-base-content/70">Reset code</label>
              <input
                type="text"
                className="input w-full rounded-xl border-base-300 outline-0 focus:border-success tracking-widest text-center text-lg"
                placeholder="······"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-base-content/70">New password</label>
              <input
                type="password"
                className="input w-full rounded-xl border-base-300 outline-0 focus:border-success"
                placeholder="Min. 8 characters"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-success w-full rounded-xl text-white font-medium hover:bg-success/90 transition-all"
            >
              {loading ? "Resetting..." : "Reset Password →"}
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-sm text-base-content/40 hover:text-base-content transition-colors"
            >
              ← Change email
            </button>
          </form>
        )}

        <div className="pt-2 border-t border-base-200 text-center">
          <Link href="/sign-in" className="text-sm text-base-content/40 hover:text-success transition-colors">
            ← Back to Sign In
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ForgetPassword;
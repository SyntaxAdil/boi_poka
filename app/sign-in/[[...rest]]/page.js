"use client";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const SignInPage = () => {
  const { signIn, setActive } = useSignIn();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signIn) return;
    if (!email || !password) {
      toast.warning("Email এবং Password দিন");
      return;
    }

    setLoading(true);
    try {
      const result = await signIn.create({
        identifier: email,
        password: password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        toast.success("Login সফল!");
        router.push("/listed-books");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (err) {
      const message =
        err?.errors?.[0]?.longMessage ||
        err?.errors?.[0]?.message ||
        "Invalid email or password";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    if (!signIn) return;
    signIn.sso({
      strategy: "oauth_google",
      redirectCallbackUrl: "/sso-callback",
      redirectUrl: "/listed-books",
    });
  };

  return (
    <div className="min-h-[50dvh] w-full flex items-center justify-center p-4 mt-10 md:mt-0">
      <fieldset className="fieldset p-6 w-full md:max-w-md shadow rounded-2xl bg-base-100">
        <h1 className="text-2xl mb-4 font-bold uppercase text-base-content">
          Welcome <span className="text-success">Back</span>
        </h1>

        <label className="label text-base-content/70 text-sm mb-1">Email</label>
        <input
          type="email"
          className="input input-bordered w-full focus:outline-none focus:border-success"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label text-base-content/70 text-sm mb-1 mt-3">Password</label>
        <input
          type="password"
          className="input input-bordered w-full focus:outline-none focus:border-success"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center justify-between my-4">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember-me" className="checkbox checkbox-success checkbox-sm" />
            <label className="label text-base-content/70 text-sm cursor-pointer" htmlFor="remember-me">
              Remember Me
            </label>
          </div>
          <Link
            href="/forget-password"
            className="text-success text-sm underline hover:text-success/80 transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn btn-success w-full mb-4 text-success-content"
        >
          {loading ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </button>

        <div className="divider text-base-content/40 text-xs">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full border-base-300 text-base-content hover:bg-base-200 hover:border-base-300 hover:text-base-content"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="none" />
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
            </g>
          </svg>
          Sign in with Google
        </button>

        <div className="text-center py-4 text-base-content/70 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="text-success underline hover:text-success/80 transition-colors">
            Sign Up
          </Link>
        </div>
      </fieldset>
    </div>
  );
};

export default SignInPage;
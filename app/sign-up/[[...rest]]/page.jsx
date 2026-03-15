"use client";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const { signUp, setActive } = useSignUp();
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signUp) return;
    if (!fullName || !email || !password || !confirmPassword) {
      toast.warning("সব field পূরণ করুন");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password মিলছে না");
      return;
    }

    setLoading(true);
    try {
      await signUp.create({
        firstName: fullName.split(" ")[0],
        lastName: fullName.split(" ").slice(1).join(" "),
        emailAddress: email,
        password: password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
      toast.info("Email এ verification code পাঠানো হয়েছে");
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
      const message =
        err?.errors?.[0]?.longMessage ||
        err?.errors?.[0]?.message ||
        "Sign up failed";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!signUp) return;

    setLoading(true);
    try {
      const result = await signUp.attemptEmailAddressVerification({ code });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        toast.success("Account তৈরি সফল!");
        router.push("/listed-books");
      } else {
        toast.error("Verification failed. Please try again.");
      }
    } catch (err) {
      const message =
        err?.errors?.[0]?.longMessage ||
        err?.errors?.[0]?.message ||
        "Invalid code";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    if (!signUp) return;
    signUp.sso({
      strategy: "oauth_google",
      redirectCallbackUrl: "/sso-callback",
      redirectUrl: "/listed-books",
    });
  };

  if (pendingVerification) {
    return (
      <div className="min-h-[50dvh] w-full flex items-center justify-center p-4 mt-10 md:mt-0">
        <fieldset className="fieldset bg-base-100 p-6 w-full md:max-w-md shadow rounded-2xl">
          <h1 className="text-2xl mb-4 font-bold uppercase text-base-content">
            Email <span className="text-success">Verify</span>
          </h1>
          <p className="text-sm text-base-content/60 mb-4">
            <span className="font-medium text-base-content">{email}</span> এ একটি verification
            code পাঠানো হয়েছে
          </p>
          <label className="label text-base-content/70 text-sm mb-1">Verification Code</label>
          <input
            type="text"
            className="input input-bordered w-full focus:outline-none focus:border-success"
            placeholder="6 digit code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={handleVerify}
            disabled={loading}
            className="btn btn-success w-full mt-4 text-success-content"
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>
                Verifying...
              </>
            ) : (
              "Verify"
            )}
          </button>
        </fieldset>
      </div>
    );
  }

  return (
    <div className="min-h-[50dvh] w-full flex items-center justify-center p-4 mt-10 md:mt-0">
      <fieldset className="fieldset bg-base-100 p-6 w-full md:max-w-md shadow rounded-2xl">
        <h1 className="text-2xl mb-4 font-bold uppercase text-base-content">
          Create <span className="text-success">Account</span>
        </h1>

        <label className="label text-base-content/70 text-sm mb-1">Full Name</label>
        <input
          type="text"
          className="input input-bordered w-full focus:outline-none focus:border-success"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label className="label text-base-content/70 text-sm mb-1 mt-3">Email</label>
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

        <label className="label text-base-content/70 text-sm mb-1 mt-3">Confirm Password</label>
        <input
          type="password"
          className="input input-bordered w-full focus:outline-none focus:border-success"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn btn-success w-full mt-4 mb-4 text-success-content"
        >
          {loading ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Creating...
            </>
          ) : (
            "Sign Up"
          )}
        </button>

        <div id="clerk-captcha"></div>

        <div className="divider text-base-content/40 text-xs">OR</div>

        <button
         data-tip="This is feauture is currently unavailable."
          onClick={handleGoogleSignUp}
          className="btn btn-outline w-full border-base-300 text-base-content hover:bg-base-200 hover:border-base-300 hover:text-base-content tooltip"
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
          Sign up with Google
        </button>

        <div className="text-center py-4 text-base-content/70 text-sm">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-success underline hover:text-success/80 transition-colors">
            Sign In
          </Link>
        </div>
      </fieldset>
    </div>
  );
};

export default SignUpPage;
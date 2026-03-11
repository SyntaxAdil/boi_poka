import Link from "next/link";

const ForgetPassWord = () => {
  return (
    <div className="min-h-[50dvh] w-full flex items-center justify-center p-4 mt-10 md:mt-0">
      <fieldset className="fieldset bg-white p-6 w-full md:max-w-md shadow rounded-2xl">
        <h1 className="text-3xl mb-2 font-bold  ">
          Forget your <span className="text-success">password</span>
        </h1>

        <p className="text-neutral-500 mb-4 text-[16px] font-medium">
          Please enter the email address you&apos;d like your password reset
          information sent to
        </p>

        <label className="label">Enter email address </label>
        <input
          type="email"
          className="input w-full outline-0"
          placeholder="Email"
        />

        <button className="btn btn-success  my-4 text-white ">
          Request reset link
        </button>

        <Link href="/sign-in" className="text-success ms-2 underline text-center">
          Back to Sinin
        </Link>
      </fieldset>
    </div>
  );
};

export default ForgetPassWord;

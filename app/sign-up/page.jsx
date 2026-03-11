
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="min-h-[50dvh] w-full flex items-center justify-center p-4 mt-10 md:mt-0">
      <fieldset className="fieldset bg-white p-6 w-full md:max-w-md shadow rounded-2xl">
        <h1 className="text-2xl mb-4 font-bold uppercase">
          Create <span className="text-success">Account</span>
        </h1>

        <label className="label">Full Name</label>
        <input type="text" className="input w-full outline-0" placeholder="Full Name" />

        <label className="label">Email</label>
        <input type="email" className="input w-full outline-0" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input w-full outline-0" placeholder="Password" />

        <label className="label">Confirm Password</label>
        <input type="password" className="input w-full outline-0" placeholder="Confirm Password" />

        <button className="btn btn-success mt-4 mb-4 text-white">Sign Up</button>

        <button className="btn bg-white text-black border-[#e5e5e5]">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>
          Signup with Google
        </button>

        <div className="text-center py-2">
          <h4>Already have an account?
            <Link href="/sign-in" className="text-success ms-2 underline">
              Sign In
            </Link>
          </h4>
        </div>
      </fieldset>
      <p className="fixed  md:top-30 md:right-10 badge badge-success px-5 py-4 rounded-full text-white animate-pulse">Authentication is under construction</p>
    </div>
  );
};

export default SignUp;
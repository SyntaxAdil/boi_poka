import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70dvh] flex flex-col items-center justify-center text-center px-6 gap-6">

      <div className="relative">
        <p className="text-[120px] md:text-[160px] font-semibold text-base-200 leading-none select-none">
          404
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl">📚</span>
        </div>
      </div>

      <div className="space-y-2 -mt-4">
        <h1 className="text-2xl font-semibold tracking-tight">
          Page not <span className="text-success">found</span>
        </h1>
        <p className="text-base-content/50 text-sm max-w-xs mx-auto leading-relaxed">
          Looks like this page went missing from the shelf. Let's get you back to reading.
        </p>
      </div>

      <div className="flex items-center gap-3 mt-2">
        <Link
          href="/"
          className="btn btn-success text-white px-6 rounded-xl font-medium hover:bg-success/90 transition-all duration-150"
        >
          Go Home
        </Link>
        <Link
          href="/listed-books"
          className="btn btn-ghost px-6 rounded-xl font-medium text-base-content/60 hover:text-base-content transition-all duration-150"
        >
          Browse Books →
        </Link>
      </div>

    </div>
  );
}
import HERO_IMAGE from "@/public/books.jpg";
import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch bg-base-100 border border-base-200 rounded-2xl overflow-hidden min-h-90 py-5">
      {/* Left — Text */}
      <div className="flex-1 flex flex-col justify-center gap-6 px-4 md:px-14 py-8 md:py-12">
        {/* Badge */}
        <div className="flex items-center gap-2 bg-success/10 rounded-full px-1 md:px-3 py-1 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-success inline-block animate-pulse" />
          <span className="text-xs font-medium text-success">
            100+ curated books
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
          Your next great <span className="text-success">read</span>
          <br />
          starts here
        </h1>

        {/* Subtext */}
        <p className="text-base-content/60 text-[15px] leading-relaxed max-w-sm">
          Explore a handpicked collection of books — from timeless classics to
          modern favorites. Track what you've read and discover what's next.
        </p>

        {/* CTA */}
        <div className="flex items-center gap-4 mt-2">
          <Link
            href="/listed-books"
            className="bg-success text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-success/90 transition-colors duration-150"
          >
            Browse Books
          </Link>
          <Link
            href="/pages-to-read"
            className="text-base-content/50 text-sm hover:text-base-content transition-colors duration-150 flex items-center gap-1"
          >
            Reading List <span>→</span>
          </Link>
        </div>
      </div>

      {/* Right — Image */}

      <div className="relative w-full md:w-95 min-h-65 bg-success/10 shrink-0 overflow-hidden rounded-4xl hover-3d">
        <figure className="max-w-100 rounded-2xl">
          <Image
            src={HERO_IMAGE}
            alt="BoiTori — Your reading companion"
            fill
            className="object-cover object-center rounded-4xl opacity-90"
            priority
          />
        </figure>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default HeroBanner;

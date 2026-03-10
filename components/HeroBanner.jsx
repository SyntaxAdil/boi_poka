

import HERO_IMAGE from "@/public/books.jpg";
import Image from "next/image";
import Buttons from "./Buttons";
import  Link  from "next/link";

const HeroBanner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-15 md:gap-5 py-20 bg-[#f3f3f3] px-15 rounded">
      <div>
        <h3 className="text-6xl font-semibold mb-10 leading-20">Books to freshen up your bookshelf</h3>
        <Link href="/listed-books">
          <Buttons content="View the List" extraClass={"w-fit"} />
        </Link>
      </div>
      <div>
        <Image src={HERO_IMAGE} alt="hero-image" className="rounded-2xl shadow" />
      </div>
    </div>
  );
};

export default HeroBanner;

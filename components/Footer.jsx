import Link from "next/link";

const NAV_LINKS = [
  { link: "Home", href: "/" },
  { link: "Listed Books", href: "/listed-books" },
  { link: "Pages to Read", href: "/pages-to-read" },
];

const Footer = () => {
  return (
    <footer className="bg-base-900 bg-neutral text-neutral-content mt-10 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="space-y-3">
          <h2 className="text-2xl font-bold">
            Boi <span className="text-success">Tori</span>
          </h2>
          <p className="text-sm text-neutral-content/60 leading-relaxed max-w-xs">
            Your personal book tracker. Discover reads, build your wishlist, and never lose track of your next book.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-content/40">
            Navigation
          </h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((i) => (
              <li key={i.link}>
                <Link
                  href={i.href}
                  className="text-sm text-neutral-content/70 hover:text-success transition-colors duration-150"
                >
                  {i.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-content/40">
            About
          </h3>
          <p className="text-sm text-neutral-content/60 leading-relaxed">
            Built with Next.js, Tailwind CSS, DaisyUI & Clerk. A passion project for book lovers.
          </p>
          <div className="flex gap-3 pt-1">
            <span className="text-xs bg-success/10 text-success px-3 py-1 rounded-full font-medium">Next.js</span>
            <span className="text-xs bg-success/10 text-success px-3 py-1 rounded-full font-medium">DaisyUI</span>
            <span className="text-xs bg-success/10 text-success px-3 py-1 rounded-full font-medium">Clerk</span>
          </div>
        </div>

      </div>

      <div className="border-t border-neutral-content/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-neutral-content/40">
            © {new Date().getFullYear()} Boi tori. All rights reserved.
          </p>
          <p className="text-xs text-neutral-content/40">
            Made with ♥ by <span className="text-success font-medium">Abdur Rahman Adil</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center  text-base-100 font-bold p-8 bg-success text-md ">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Abdur Rahman Adil
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

"use client";

const Buttons = ({ content, extraClass, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-success text-white font-medium px-6 rounded-xl hover:bg-success/90 transition-all duration-150 ${extraClass}`}
    >
      {content}
    </button>
  );
};

export default Buttons;
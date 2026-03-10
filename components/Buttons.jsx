"use client";

const Buttons = ({content,extraClass,onClick}) => {
  return (
    <button onClick={onClick} className={`btn btn-success w-25 px-4 ${extraClass} text-white font-medium`}>
        {content}
    </button>
  )
}

export default Buttons
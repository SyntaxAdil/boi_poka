

const SortBy = ({setSelectOption}) => {
  

// const duplicateCheck=()=>{
  
// }


  return (
    <div className="w-fit mx-auto">
      <select
        defaultValue="Sort By"
        className="select outline-0 select-success  text-success"
      >
        <option
          onClick={(e) => setSelectOption(e.target.value)}
          disabled={true}
        >
          Sort By
        </option>
        
        <option onClick={(e) => setSelectOption(e.target.value)}>Rating</option>
        <option onClick={(e) => setSelectOption(e.target.value)}>
          Number of pages
        </option>
        <option onClick={(e) => setSelectOption(e.target.value)}>
          Publisher year
        </option>
        
      </select>
    </div>
  );
};

export default SortBy;

const FilterCategory = ({ setFilterOption, BookCard }) => {
  return (
    <div className="w-fit mx-auto">
      <select
        defaultValue="Classic"
        className="select outline-0 select-success  text-success"
      >
        {BookCard.map((i) => (
          <option
            onClick={(e) => setFilterOption(e.target.value)}
            value={i}
            key={i}
          >
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCategory;

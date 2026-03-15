const FilterCategory = ({ setFilterOption, BookCard }) => {
  return (
    <div className="w-fit mx-auto">
      <select
        defaultValue="Category"
        className="select outline-0 select-success  text-success"
      >
        <option value="Category" disabled>Category</option>
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

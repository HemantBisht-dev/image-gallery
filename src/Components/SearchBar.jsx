import { useState } from "react";

function SearchBar({ searchText }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    searchText(text);
  }
  return (
    <>
      <form className="text-center" onSubmit={handleSubmit}>
        <div className=" mb-3 w-90">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            className=" m-3 w-50 h-50"
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchBar;

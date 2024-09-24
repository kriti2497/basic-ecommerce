import React from "react";

interface SearchProps {
  search: string;
  setSearch: (arg: string) => void;
}

const Search = ({ search, setSearch }: SearchProps) => {
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        className="border"
        type="search"
        value={search}
        onChange={searchHandler}
      />
    </div>
  );
};

export default Search;

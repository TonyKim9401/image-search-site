import { useState } from "react";
import styles from "./CommonSearchBar.module.scss";
import { useRecoilState } from "recoil";
import { searchState } from "@/recoil/atoms/searchState";
import { pageState } from "@/recoil/atoms/pageState";

function CommonSearchBar() {
  const [search, setSearch] = useRecoilState(searchState);
  const [page, setPage] = useRecoilState(pageState);
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSearch = () => {
    createSearchText();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      createSearchText();
    }
  };

  const createSearchText = () => {
    if (text === "") {
      setSearch("Canada");
    } else {
      setSearch(text);
    }
    setPage(1);
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          type="text"
          placeholder="Search your images"
          className={styles.searchBar__search__input}
          value={text}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
      </div>
    </div>
  );
}

export default CommonSearchBar;

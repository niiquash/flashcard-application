import "./CategoriesFilter.css";
import { useState } from "react";
import DropdownIcon from "../../assets/icon-chevron-down.svg";

const CategoriesFilter = () => {
  const [isFilterOptionsVisible, setIsFilterOptionsVisible] = useState(false);

  function toggleFilterOptions() {
    setIsFilterOptionsVisible(!isFilterOptionsVisible);
    console.log("Filter options visibility toggled:", isFilterOptionsVisible);
  }
  return (
    <div className="categories-filter">
      <button
        className="categories-filter__button"
        onClick={toggleFilterOptions}
      >
        All Categories
        <img src={DropdownIcon} alt="Dropdown" />
      </button>
      <ul
        className={
          isFilterOptionsVisible
            ? "categories-filter__options"
            : "categories-filter__options categories-filter__options--hidden"
        }
      >
        <li className="categories-filter__option">
          <label>
            <input type="checkbox" />
            Art (1)
          </label>
        </li>

        <li className="categories-filter__option">
          <label>
            <input type="checkbox" />
            Web Development (5)
          </label>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesFilter;

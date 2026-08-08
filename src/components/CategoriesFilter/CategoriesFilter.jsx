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
      <ul className="categories-filter__options">
        <li className="categories-filter__option">
          <label>
            <input type="checkbox" />
            Art (1)
          </label>
        </li>
        <li className="categories-filter__option">
          <label>
            <input type="checkbox" />
            CSS (6)
          </label>
        </li>
        <li className="categories-filter__option">
          <label>
            <input type="checkbox" />
            Geography (4)
          </label>
        </li>
        <li className="categories-filter__option">
          <label>
            <input type="checkbox" />
            History (1)
          </label>
        </li>
        <li className="categories-filter__option">
          <label>
            <input type="checkbox" />
            HTML (3)
          </label>
        </li>
        <li className="categories-filter__option">
          <label>
            <input type="checkbox" />
            JavaScript (14)
          </label>
        </li>
        <li className="categories-filter__option">
          <label>
            <input type="checkbox" />
            Literature (1)
          </label>
        </li>
        <li className="categories-filter__option">
          <label>
            <input type="checkbox" />
            Mathematics (1)
          </label>
        </li>
        <li className="categories-filter__option">
          <label>
            <input type="checkbox" />
            Programming Concepts (1)
          </label>
        </li>
        <li className="categories-filter__option">
          <label>
            <input type="checkbox" />
            Science (3)
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

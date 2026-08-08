import "./StudyCard.css";
import ShuffleIcon from "../../assets/icon-shuffle.svg";
import ChevronLeftIcon from "../../assets/icon-chevron-left.svg";
import ChevronRightIcon from "../../assets/icon-chevron-right.svg";
import CategoriesFilter from "../CategoriesFilter/CategoriesFilter";

const StudyCard = () => {
  return (
    <section className="study-card">
      <div className="card-controls">
        <div className="card-controls__categories-hide-mastered">
          <CategoriesFilter />
          <label className="card-controls__hide--mastered">
            <input type="checkbox" />
            Hide Mastered
          </label>
        </div>
        <button className="card-controls__shuffle">
          <img src={ShuffleIcon} alt="shuffle icon" />
          Shuffle
        </button>
      </div>
      <div></div>
      <div className="card-controls__pagination">
        <div className="card-controls__pagination--buttons-and-card-number">
          <button className="card-controls__pagination--previous">
            <img src={ChevronLeftIcon} alt="previous icon" />
            <span>Previous</span>
          </button>
          <span className="card-controls__pagination--card-number">
            Card 1 of 10
          </span>
          <button className="card-controls__pagination--next">
            <span>Next</span>
            <img src={ChevronRightIcon} alt="next icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudyCard;

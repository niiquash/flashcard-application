import "./StudyCard.css";
import ShuffleIcon from "../../assets/icon-shuffle.svg";
import ChevronLeftIcon from "../../assets/icon-chevron-left.svg";
import ChevronRightIcon from "../../assets/icon-chevron-right.svg";
import CategoriesFilter from "../CategoriesFilter/CategoriesFilter";
import ResetProgressIcon from "../../assets/icon-reset.svg";
import CheckmarkIcon from "../../assets/icon-check.svg";

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
      <div className="flashcard">
        <div className="flashcard__front-back-buttons">
          <div className="flashcard__front">Card Front</div>
          <div className="flashcard__back">Card Back</div>
          <div className="flashcard__buttons">
            <button className="flashcard__button--know">
              <img src={CheckmarkIcon} alt="checkmark icon" />I Know This
            </button>
            <button className="flashcard__button--reset">
              <img src={ResetProgressIcon} alt="reset icon" />
              Reset Progress
            </button>
          </div>
        </div>
      </div>
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

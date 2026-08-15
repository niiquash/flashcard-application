import "./StudyCard.css";
import ShuffleIcon from "../../assets/icon-shuffle.svg";
import ChevronLeftIcon from "../../assets/icon-chevron-left.svg";
import ChevronRightIcon from "../../assets/icon-chevron-right.svg";
import CategoriesFilter from "../CategoriesFilter/CategoriesFilter";
import ResetProgressIcon from "../../assets/icon-reset.svg";
import CheckmarkIcon from "../../assets/icon-check.svg";
import BlueStar from "../../assets/pattern-star-blue.svg";
import PinkStar from "../../assets/pattern-star-pink.svg";
import YellowStar from "../../assets/pattern-star-yellow.svg";

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
          <div className="flashcard__front">
            <div className="top-right-star">
              <img src={BlueStar} alt="" />
            </div>
            <div className="bottom-left-star">
              <img src={YellowStar} alt="" />
            </div>
            <section className="flashcard__front--content">
              <h1>Web Development</h1>
              <article>
                <h2>What does HTML stand for?</h2>
                <p>Click to reveal answer</p>
              </article>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div className="progress-bar__fill"></div>
                </div>
                <span>0/5</span>
              </div>
            </section>
          </div>
          <div className="flashcard__back">
            <div className="top-right-star">
              <img src={PinkStar} alt="" />
            </div>
            <div className="bottom-left-star">
              <img src={YellowStar} alt="" />
            </div>
            <section className="flashcard__back--content">
              <h1>Web Development</h1>
              <article>
                <h2>Answer:</h2>
                <p>HyperText Markup Language</p>
              </article>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div className="progress-bar__fill"></div>
                </div>
                <span>0/5</span>
              </div>
            </section>
          </div>
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

import "./StudyCard.css";
import ShuffleIcon from "../../assets/icon-shuffle.svg";
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
      <div></div>
    </section>
  );
};

export default StudyCard;

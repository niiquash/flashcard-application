import "./StudyCard.css";
import ShuffleIcon from "../../assets/icon-shuffle.svg";

const StudyCard = () => {
  return (
    <section className="study-card">
      <div className="card-controls">
        <div className="card-controls__categories-hide-mastered">
          <select className="card-controls__categories" value="">
            <option
              value="All Categories"
              className="card-controls__categories-option"
            >
              All Categories (1)
            </option>
            <option value="Art" className="card-controls__categories-option">
              Art (1)
            </option>
            <option value="CSS" className="card-controls__categories-option">
              CSS (6)
            </option>
            <option
              value="Geography"
              className="card-controls__categories-option"
            >
              Geography (4)
            </option>
            <option
              value="History"
              className="card-controls__categories-option"
            >
              History (1)
            </option>
            <option value="HTML" className="card-controls__categories-option">
              HTML (3)
            </option>
            <option
              value="JavaScript"
              className="card-controls__categories-option"
            >
              JavaScript (14)
            </option>
            <option
              value="Literature"
              className="card-controls__categories-option"
            >
              Literature (1)
            </option>
            <option
              value="Mathematics"
              className="card-controls__categories-option"
            >
              Mathematics (1)
            </option>
            <option
              value="Programming Concepts"
              className="card-controls__categories-option"
            >
              Programming Concepts (1)
            </option>
            <option
              value="Science"
              className="card-controls__categories-option"
            >
              Science (3)
            </option>
            <option
              value="Web Development"
              className="card-controls__categories-option"
            >
              Web Development (5)
            </option>
          </select>
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

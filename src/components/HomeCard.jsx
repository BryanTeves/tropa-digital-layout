import { FiCalendar } from "react-icons/fi";

function HomeCard() {
  return (
    <div className="card">
      <div className="card_div-image">
        <div className="card-time">
          <FiCalendar className="card-icon tiny" />
          <p>2min atrás</p>
        </div>
      </div>

      <div className="card-text">
        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}

export default HomeCard;

import './index.css'

const Card = ({card}) => {
  return ( 
    <div className="card">
        <div className="card__day">
          <span className="card__day-text">
            {card.Date}
          </span>
        </div>
        <div className="card__status">
          <div className="card__active">
            <span className="card__text">Active</span>
            <span className="card__number">{card.Active}</span>
          </div>
          <div className="card__deaths">
          <span className="card__text">Deaths</span>
          <span className="card__number">{card.Deaths}</span>
          </div>
          <div className="card__confirmed">
          <span className="card__text">Confirmed</span>
          <span className="card__number">{card.Confirmed}</span>
          </div>
          <div className="card__recovered">
          <span className="card__text">Recovered</span>
          <span className="card__number">{card.Recovered}</span>
          </div>
        </div>
    </div>
   );
}
 
export default Card;
import './Card.css';

const Card = ({ img, title, description, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={img} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;

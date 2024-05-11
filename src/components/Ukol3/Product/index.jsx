import './style.css';

export const Product = ({ image, name, price, onSelectPrice }) => {
  return (
    <div
      onClick={() => {
        onSelectPrice(price);
      }}
      className="product"
    >
      <img src={image} className="product__image" />
      <div className="product__body">
        {name}: {price} Kč
      </div>
    </div>
  );
};

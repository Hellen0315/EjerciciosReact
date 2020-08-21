const PricesD = props => {
  const priceArray = [];
  for (let i = 0; i < props.data; i++) {
    priceArray.push(" $ ");
  }
  return (
    <div className="priceContainer">
      {priceArray.map((dato, i) => (
        <div className="price" key={i}>{dato}</div>
        ))}
    </div>
  );
};

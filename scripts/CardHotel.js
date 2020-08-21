class CardHotel extends React.Component {

  render() {
    return (
      <div className="hotel-container">
        <img className="hotelImage" src={this.props.photo} alt="hotel_img" />
        <div className="dataContainer">
          <div className="textContainer">
            <p className="title">{this.props.name}</p>
            <p className="description">{this.props.description}</p>
          </div>
          <div className="infoCity">
            <div className="placeContainer">
              <span className="material-icons">
              room
              </span>
            </div>
            <div className="cityContainer">
              <p>{this.props.city}, {this.props.country} </p>
            </div>
          </div>
          <div className="infoContainer">
            <div className="infoPlace">
              <div className="roomsContainer">
                <span className="material-icons">
                hotel
                </span>
              </div>
              <div className="rooms">
                <p>{this.props.rooms} Habitaciones</p> 
              </div>
            </div>
            <div className="priceContainer">
                <PricesD data={this.props.price} />
            </div>
          </div>
          <button className="buttonBooking" onClick={() => {}}>
            Reservar
          </button>
        </div>
      </div>
    );
  }
}
  
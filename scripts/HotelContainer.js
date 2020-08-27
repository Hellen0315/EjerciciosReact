const img = './images/hotelsoon';
class HotelContainer extends React.Component {
  render() {
    const {data} = this.props;
     return (
      <div className="hotelList">
        {data.length ? 
          data.map(hotel => <CardHotel key={hotel.slug} {...hotel} />)
          : <img className="soon" src={img} alt="imgSoon" />
        }
      </div>

    );
  }
}


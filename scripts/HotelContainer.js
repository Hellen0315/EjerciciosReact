class HotelContainer extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="hotelList">
        {data.map(hotel => (
          <CardHotel key={hotel.slug} {...hotel} />
        ))}
      </div>

    );
  }
}


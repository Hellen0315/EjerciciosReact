class HotelContainer extends React.Component {
  render() {
    // let box = null;
    const {data} = this.props;
    // if (this.props.estado=== true){
    //   <div>
    //   box = (
    //     <p>En este momento lo contamos con hoteles disponibles a los filtros seleccionados </p> 
    //   );
    //   </div>
    // }
    
    return (
      <div className="hotelList">
        {/* {box} */}
        {data.map(hotel => (
          <CardHotel key={hotel.slug} {...hotel} />
        ))}
      </div>

    );
  }
}


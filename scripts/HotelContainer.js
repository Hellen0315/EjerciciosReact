class HotelContainer extends React.Component {
    state={
      arrayEnd:this.props.data
    }

    filtroCountry = (data) => () => {
      const dataA = this.state.arrayEnd;
      dataA.filter(datos => datos.country === data)
      this.setState({
        previousMessages: dataA
      });
    };

    filtroPrices = (data) => () => {
      const dataA = this.state.arrayEnd;
      dataA.filter(datos => datos.price === data)
      this.setState({
        previousMessages: dataA
      });
    };

    filtroSize = (data) => () => {
      const dataA = this.state.arrayEnd;
      if (data == "pequeño"){
        dataA.filter(room => room.rooms <= 10);
       } 
      if (data == "mediano"){
        dataA.filter(room => room.rooms > 10 && room.rooms <= 20);
      }
      if (data == "grande"){
        dataA.filter(room => room.rooms > 20); 
      }   
      this.setState({
        previousMessages: dataA
      });
    };
  
   render() {

     const {priceFilter,  countryFilter, sizeFilter} = this.props
     if (countryFilter != "Todos"){
        this.filtroCountry(countryFilter);
     }
     if (priceFilter != "Todos"){
       this.filtroPrices(priceFilter);
     }
     if (sizeFilter != "Todos"){
       this.filtroSize(sizeFilter);
     }
     console.log(this.state.arrayEnd);
     console.log(priceFilter);
    return (
      <div className="hotelList">
      {this.state.arrayEnd.map(hotel => (
        <CardHotel key={hotel.slug} {...hotel} />
      ))}
      </div>

      );
  }
}


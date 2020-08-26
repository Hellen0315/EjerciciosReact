class App extends React.Component {
  state = {
    dataHoteles: hotelsData,
    filters:{
      initialDate: moment(),
      finalDate: moment(),
      priceFilter:"Todos",
      countryFilter:"Todos",
      sizeFilter:"Todos"
    }
  }
  handleonChage = (e) => {
    e.persist()
    this.setState({
      filters:{
        ...this.state.filters,
        [e.target.name]: e.target.value
      }
    })
  };

  filtroHotels = () =>{
    const {priceFilter,countryFilter,sizeFilter} = this.state.filters;
    let hotelD = this.state.dataHoteles;

    if (priceFilter !== "Todos"){
       hotelD= hotelD.filter(datos => datos.price === priceFilter);
    }
    if (countryFilter !== "Todos"){
      hotelD= hotelD.filter(datos => datos.country === countryFilter);
    }
    if (sizeFilter == "pequeño"){
      hotelD = hotelD.filter(room => room.rooms <= 10);
     } 
    if (sizeFilter == "mediano"){
      hotelD = hotelD.filter(room => room.rooms > 10 && room.rooms <= 20);
    }
    if (sizeFilter == "grande"){
      hotelD = hotelD.filter(room => room.rooms > 20); 
    }   
    return hotelD;
  }
  
   render() {
    return (
      <div className="App">
        <Header initialDate={this.state.filters.initialDate}  finalDate={this.state.filters.finalDate}/>
        <Filter data={this.state.dataHoteles} {...this.state.filters} onChange={this.handleonChage} />
        <HotelContainer data={this.state.dataHoteles} filter={this.filtroHotels()}/>
      </div>
    );
  }
}

const rootElement = document.getElementById("app");
ReactDOM.render( 
    <App />,
 rootElement);


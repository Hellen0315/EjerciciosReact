class App extends React.Component {
  state = {
    dataHoteles: hotelsData,
    filters :{
      initialDate: moment(),
      finalDate: moment(),
      priceFilter: "Todos",
      countryFilter: "Todos",
      sizeFilter: "Todos"
    }
  }
  handleonChage = (e) => {
    e.persist()
    this.setState({
      filters: {
        ...this.state.filters,
        [e.target.name]: e.target.value
      }
    })
  };

  filtroHotels = () => {
    const {priceFilter, countryFilter, sizeFilter} = this.state.filters;
    let hoteles = this.state.dataHoteles;

    if (priceFilter !=="Todos"){
      hoteles = hoteles.filter((hotel) => hotel.price == priceFilter);
    }
    if (countryFilter !=="Todos"){
      hoteles = hoteles.filter((hotel) => hotel.country === countryFilter);
    }
    if (sizeFilter == "pequeño"){
      hoteles = hoteles.filter(room => room.rooms <= 10);
    }
    if (sizeFilter == "mediano"){
      hoteles = hoteles.filter(room => room.rooms > 10 && room.rooms <= 20);
    }
    if (sizeFilter == "grande"){
      hoteles = hoteles.filter(room => room.rooms > 20);
    }
    return hoteles
  }

  render (){
    return (
      <div className="App">
        <Headers  initialDate={this.state.filters.initialDate} finalDate={this.state.filters.finalDate}/>
        <Filter data={this.state.dataHoteles} {...this.state.filters} onChange={this.handleonChage} />
        <HotelContainer  data = {this.filtroHotels()} />
      </div>
    );
  }
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);


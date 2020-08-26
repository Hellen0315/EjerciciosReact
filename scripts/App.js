class App extends React.Component {
  state = {
    dataHoteles: hotelsData,
    filters: {
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

  filterHotels = () => {
    const { priceFilter, countryFilter, sizeFilter } = this.state.filters;
    let hotels = this.state.dataHoteles;
    if (countryFilter !== "Todos") {
      hotels = hotels.filter((hotel) => hotel.country === countryFilter);
    }
    if (priceFilter !== "Todos") {
      hotels = hotels.filter((hotel) => hotel.price == priceFilter);
    }
    if (sizeFilter  == "pequeño") {
      hotels = hotels.filter(room => room.rooms <= 10);
    }
    if (sizeFilter  == "mediano") {
      hotels = hotels.filter(room => room.rooms > 10 && room.rooms <= 20);
    }
    if (sizeFilter  == "grande") {
      hotels = hotels.filter(room => room.rooms > 20);
    }
    return hotels
  }

  filtroCountry = () => {
    const { countryFilter } = this.state.filters;
    if (countryFilter != "Todos") {
      const dataA = this.state.dataHoteles;
      const dataC = dataA.filter(datos => datos.country === data)

      console.log(dataC, data);

      this.setState({
        dataHoteles: dataC
      });
    }
  };

  filtroPrices = (data) => {
    const dataA = this.state.dataHoteles;
    dataA.filter(datos => datos.price === data)
    this.setState({
      dataHoteles: dataA
    });
  };

  filtroSize = (data) => () => {
    const dataA = this.state.dataHoteles;
   
    this.setState({
      dataHoteles: dataA
    });
  };

  render() {
    return (
      <div className="App">
        <Header initialDate={this.state.filters.initialDate} finalDate={this.state.filters.finalDate} />
        <Filter data={this.state.dataHoteles} {...this.state.filters} onChange={this.handleonChage} />
        <HotelContainer data={this.filterHotels()} />
      </div>
    );
  }
}

const rootElement = document.getElementById("app");
ReactDOM.render(
  <App />,
  rootElement);


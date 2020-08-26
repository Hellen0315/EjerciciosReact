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

    // this.filtroCountry(this.state.filters.countryFilter)
  };

  filtroCountry = (data) =>  {
    if (this.state.countryFilter != "Todos"){
    const dataA = this.state.dataHoteles;
    const dataC= dataA.filter(datos => datos.country === data)
    this.setState({
      dataHoteles:dataC
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
      dataHoteles: dataA
    });
  };
  render() {

    console.log(this.state.filters.countryFilter);
    // console.log(this.state.filters.priceFilter);
    // console.log(this.state.filters.sizeFilter);

    return (
      <div className="App">
        <Header initialDate={this.state.filters.initialDate}  finalDate={this.state.filters.finalDate}/>
        <Filter data={this.state.dataHoteles} {...this.state.filters} onChange={this.handleonChage} />
        <HotelContainer data={this.state.dataHoteles}/>
      </div>
    );
  }
}

const rootElement = document.getElementById("app");
ReactDOM.render( 
    <App />,
 rootElement);


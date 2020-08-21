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

  render() {
    return (
      <div className="App">
        <Header initialDate={this.state.filters.initialDate}  finalDate={this.state.filters.finalDate}/>
        <Filter data={this.state.dataHoteles} {...this.state.filters} onChange={this.handleonChage} />
        <HotelContainer data={this.state.dataHoteles} {...this.state.filters}/>
      </div>
    );
  }
}

const rootElement = document.getElementById("app");
ReactDOM.render( 
    <App />,
 rootElement);


class Filter extends React.Component {
  render() {
    const { initialDate, finalDate, onChange, countryFilter } = this.props

    const unique = (value, index, self) => {
      return self.indexOf(value) === index
    }
    const countryList = this.props.data.map(country => country.country)
    const uniqueCountry = countryList.filter(unique)
    const pricesList = this.props.data.map(prices => prices.price)
    const uniquePrices = pricesList.filter(unique)
    const orderPrices = uniquePrices.sort();
    const viewPrices = orderPrices.map(element => '$'.repeat(element));

    return (
      <nav className="filter">
        <input className="initialDate"
          type="date"
          name="initialDate"
          onChange={onChange}
          values={initialDate}>
        </input>
        <input className="finalDate"
          type="date"
          name="finalDate"
          onChange={onChange}
          value={finalDate}>
        </input>

        <select
          className="country"
          name="countryFilter"
          values={countryFilter}
          onChange={onChange}
        >
          <option value="Todos">Todos los países</option>
          {
            uniqueCountry.map((dato, i) => <option key={i} value={dato}>{dato}</option>)
          }
        </select>

        <select
          className="prices"
          name="priceFilter"
          values="price"
          onChange={onChange}
        >
          <option value="Todos">Cualquier precio </option>
          {
            viewPrices.map((dato, i) => <option key={i} value={orderPrices[i]}>{dato}</option>)
          }
        </select>

        <select
          className="size"
          name="sizeFilter"
          values="size"
          onChange={onChange}
        >
          <option value="Todos">Cualquier tamaño </option>
          <option value="pequeño">Hotel pequeño </option> /**hasta 10 habitaciones*/
          <option value="mediano">Hotel mediano </option> /**hasta 20 habitaciones*/
          <option value="grande">Hotel grande </option> /**mas de 20 habitaciones*/
        </select>
      </nav>
    );
  }
}

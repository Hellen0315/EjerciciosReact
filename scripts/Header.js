
class Header extends React.Component{
  render (){
    const { initialDate, finalDate } = this.props
    return(
      <div className="header">
        <div className="oval-half-red">
          <h1 className="titleAll">Hoteles</h1>
        </div>
        <p className="date">
          {`Desde el ${moment(initialDate).format('dddd')}, ${moment(initialDate).format('D')} de ${moment(initialDate).format('MMMM')} de ${moment(initialDate).format('YYYY')} 
          hasta el ${moment(finalDate).format('dddd')}, ${moment(finalDate).format('D')} de ${moment(finalDate).format('MMMM')} de ${moment(finalDate).format('YYYY')}` }
        </p>
      </div>
    );
  }
}



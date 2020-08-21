
class Header extends React.Component{
  render (){
    const { initialDate, finalDate } = this.props
    // const days = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    // const getDays = (i) => days[i];
    // const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    // const getMonths = (i) => months[i];
    // const formatDate = (date) => `${getDays(Number(date.format('d')))} , ${date.format('D')} de ${getMonths(Number(date.format('M'))- 1)} de ${date.format('YYYY')}`;

    return(
      <div className="header">
        <h1 className="titleAll">Hoteles</h1>
        {/* ><p className="date" Desde el {formatDate(initialDate)} hasta el {formatDate(finalDate)}</p> */}
        <p className="date">
        {`Desde el ${moment(initialDate).format('dddd')}, ${moment(initialDate).format('D')} de ${moment(initialDate).format('MMMM')} de ${moment(initialDate).format('YYYY')} 
        hasta el ${moment(finalDate).format('dddd')}, ${moment(finalDate).format('D')} de ${moment(finalDate).format('MMMM')} de ${moment(finalDate).format('YYYY')}` }
        </p>
      </div>
    );
  }
}



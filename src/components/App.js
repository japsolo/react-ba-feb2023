import { Component } from 'react';
// import Header from './Header';
// import Projects from './Projects';
// import Services from './Services';

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: ['Home', 'Services', 'Projects', 'Pages', 'Contact'],
      main: false,
      character: {},
      numero: 0
    }
  }

  /* Montamos un componente */
  componentDidMount (){
    console.log('Se creo el componente');
    fetch('https://rickandmortyapi.com/api/character/1')
      .then(res => res.json())
      .then(char => {
        this.setState({character: char})
      })
  }

  /* Actualizamos el state de un componente */
  componentDidUpdate (){
    console.log('Se actualizó el componente');
  }

  /* Desmontamos un componente */
  componentWillUnmount (){
    console.log('Se elimino el componente');
  }

  /* metodos propios */
  alertaRegistro (){
    alert('Se acaba de registrar');
  }

  decrementar () { 
    this.setState({numero: this.state.numero - 1});
  }

  incrementar () { 
    this.setState({numero: this.state.numero + 1});
  }

  handleClick (x) {
    if (x) {
      this.setState({numero: this.state.numero + 1});
    } else {
      this.setState({numero: this.state.numero - 1});
    }
  }

  render () {
    return (
      <>
        {/* <Header links={this.state.links} /> */}
      <div className='d-flex'>
        <button onClick={() => this.handleClick(false)}> - </button>
        <h2>{this.state.numero}</h2>
        <button onClick={() => this.handleClick(true)}> + </button>
      </div>
      
      </>
    );
  }
}

export default App;

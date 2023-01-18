import { Component } from 'react';
import Header from './Header';
import Projects from './Projects';
import Services from './Services';

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: ['Home', 'Services', 'Projects', 'Pages', 'Contact'],
      main: false,
      character: {}
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

  render () {
    return (
      <>
        <Header links={this.state.links} />
        {
          this.state.main ? <Projects /> : <Services />
        }
        <h2>{this.state.character.name}</h2>
        <img src={this.state.character.image} alt="" />
      </>
    );
  }
}

export default App;

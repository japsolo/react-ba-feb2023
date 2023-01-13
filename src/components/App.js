import { Component } from 'react';
import Header from './Header';
import Projects from './Projects';
import Services from './Services';

class App extends Component {
  links = ['Home', 'Services', 'Projects', 'Pages', 'Contact'];
  state = {
    main: true
  }

  render () {
    return (
      <>
        <Header links={this.links} />
        {
          this.state.main ? <Projects /> : <Services />
        }
      </>
    );
  }
}

export default App;

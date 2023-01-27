/* Importaciones de react/react-router */
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

/* Componentes */
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: ['Home', 'Services', 'Projects', 'Pages', 'Contact'],
    }
  }

  render () {
    return (
      <>
        <Header links={this.state.links} />
      
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/services/:id" component={ Detail } />
          <Route component={ NotFound } />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;

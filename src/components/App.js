import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Services from './Services';
import Projects from './Projects';
import Top from './Top';
import Footer from './Footer';

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
        <Route exact path="/">
          <Top/>
          <Services />
          <Projects />
          <Footer />
        </Route>
        <Route path="/services">
        </Route>
      </Switch>
      </>
    );
  }
}

export default App;

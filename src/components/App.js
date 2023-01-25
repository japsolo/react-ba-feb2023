import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Services from './Services';
import Top from './Top';

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
        </Route>
        <Route path="/services">
          <Services />
        </Route>
      </Switch>
      </>
    );
  }
}

export default App;

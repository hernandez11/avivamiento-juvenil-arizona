import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import Event from './Pages/Event';
import Founder from './Pages/Founder';

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop>
        <Header />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/event'>
            <Event />
          </Route>
          <Route path='/about-the-founder'>
            <Founder />
          </Route>
        </Switch>

        <Footer />
      </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import Event from './Pages/Event';
import Founder from './Pages/Founder';
import PastEvents from './Pages/PastEvents';
import Upcoming from './Pages/Upcoming';
import AZYouth_Feb19 from './Pages/Event__pages/AZYouth_Feb19';

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
          <Route exact path='/Past-Events'>
            <PastEvents />
          </Route>
          <Route exact path='/Upcoming-Events'>
            <Upcoming />
          </Route>
          <Route path='/events/AYR-11-2021'>
            <Event />
          </Route>
          <Route path='/Meet-The-Founder'>
            <Founder />
          </Route>
          <Route path='/monthly-AZYouth-Feb19'>
            <AZYouth_Feb19 />
          </Route>
        </Switch>

        <Footer />
      </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;

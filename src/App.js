
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Kiran, Route, Switch } from 'react-router-dom';
import Create from './Create';
function App() {
  return (
    <Kiran>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
          </Switch>
        </div>
      </div>
    </Kiran>
  );



}

export default App;


import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Kiran, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Kiran>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Kiran>
  );



}

export default App;

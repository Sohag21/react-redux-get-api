import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import './app.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import TvShowPage from './pages/TvShowPage'
import HomePage from './pages/HomePage'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header className="Router">
        <h1>Top-Rated Television Shows</h1>
        <nav>
          <ul className="Nav">
            <li>
              <Link to="/" className="Link">
                Top Rated
              </Link>
            </li>
            <li>
              <Link to="/2" className="Link">
                Search
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/1" component={TvShowPage}></Route>
        <Route exact path="/2" component={Search}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import TvShowPage from './pages/TvShowPage'
import HomePage from './pages/HomePage'
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
              <Link to="/tv:showID" className="Link">
                Show Details
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/tv/:showId" component={TvShowPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App

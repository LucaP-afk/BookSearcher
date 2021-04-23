import React from 'react'
import './App.css'
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import InfoPage from './components/InfoPage'
import Search from './components/Search'
import ErrorBoundary from './components/ErrorBoundary'


function App() {
  return (
    <ErrorBoundary>
    <Router>
    <div className='container'>
      <Switch>
        <Route exact path='/' component={Search} />
        <Route path='/infopage/:id' component={InfoPage} />
      </Switch>
    </div>
    <Footer />
    </Router>
    </ErrorBoundary>
  );
}

export default App;

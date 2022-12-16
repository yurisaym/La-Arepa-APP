import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './paginas/Home'
import Update from './paginas/Update'
import ArepaDetails from './paginas/ArepaDetails'
import Create from './paginas/Create'
import NotFound from './paginas/NotFound'
import Navbar from './paginas/Header'
import Footer from './paginas/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/arepa/:id" component={ArepaDetails} />
        <Route path="/create" component={Create} />
        <Route path="/update/:id" component={Update} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App

// import './App.css'
// import {Content} from './Content'

// function App() {
//   return (
//     <div className="App">
//     <Content />
//     </div>
//   )
// }

// export default App;

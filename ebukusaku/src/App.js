import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter , Route } from 'react-router-dom'

//layout
import NavigationBar from './layout/NavigationBar';

//pages
import Bab1 from './pages/Bab1'
import Bab2 from './pages/Bab2'
import Bab3 from './pages/Bab3'
import Bab4 from './pages/Bab4'
import Bab5 from './pages/Bab5'
import Bab6 from './pages/Bab6'
import Bab7 from './pages/Bab7'
import Bab8 from './pages/Bab8'
import Bab9 from './pages/Bab9'
import Bab10 from './pages/Bab10'
import Bab11 from './pages/Bab11'
import Bab12 from './pages/Bab12'
import Bab13 from './pages/Bab13'
import Bab14 from './pages/Bab14'
import Bab15 from './pages/Bab15'
import Bab16 from './pages/Bab16'
import Bab17 from './pages/Bab17'
import Bab18 from './pages/Bab18'
import Bab19 from './pages/Bab19'
import Bab20 from './pages/Bab20'
import Bab21 from './pages/Bab21'
import TentangDeveloper from './pages/TentangDeveloper'

function App() {
  return (
    <div className="App">
      <NavigationBar/>

      <BrowserRouter>
        <Route exact path="/" component={Bab1} />
        <Route path="/bab1" component={Bab1} />
        <Route path="/bab2" component={Bab2} />
        <Route path="/bab3" component={Bab3} />
        <Route path="/bab4" component={Bab4} />
        <Route path="/bab5" component={Bab5} />
        <Route path="/bab6" component={Bab6} />
        <Route path="/bab7" component={Bab7} />
        <Route path="/bab8" component={Bab8} />
        <Route path="/bab9" component={Bab9} />
        <Route path="/bab10" component={Bab10} />
        <Route path="/bab11" component={Bab11} />
        <Route path="/bab12" component={Bab12} />
        <Route path="/bab13" component={Bab13} />
        <Route path="/bab14" component={Bab14} />
        <Route path="/bab15" component={Bab15} />
        <Route path="/bab16" component={Bab16} />
        <Route path="/bab17" component={Bab17} />
        <Route path="/bab18" component={Bab18} />
        <Route path="/bab19" component={Bab19} />
        <Route path="/bab20" component={Bab20} />
        <Route path="/bab21" component={Bab21} />
        <Route path="/tentangDeveloper" component={TentangDeveloper} />
      </BrowserRouter>

    </div>
  );
}

export default App;

import './css/App.css';
import NavbarComponent from './components/NavbarComponent';
import americanFootball from './american-football.png'
import NavTabs from './components/NavTabs'


function App() {
  return (
    <div className="App">
        <NavbarComponent/>
        <div className="subNavBar">
          <img src={americanFootball} alt="icon of an american football player" className="americanFootball"/>
          <NavTabs/>
        </div>
    </div>
  );
}

export default App;

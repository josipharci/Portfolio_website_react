import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
           <div class="MenuClass">
              <div class="LogoClass">
                  <img class="logo" src={logo} alt="logo" />
              </div>
               <ul class="Menu">
                  <li class="Menu-item"><a href="#" class="link">Naslovnica</a></li>
                  <li class="Menu-item"><a href="#" class="link">O meni</a></li>
                  <li class="Menu-item"><a href="#" class="link">Kontakt</a></li>
               </ul>
           </div>
      </header>
    </div>
  );
}

export default App;

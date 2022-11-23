import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="main">
                <p>
                    Generate pictures using <b>DALL&#183;E</b>
                </p>
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
        </div>
    );
}

export default App;

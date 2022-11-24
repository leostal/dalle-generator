import logo from './logo.svg';
import './App.css';
import TextInput from "./components/Input";

const App = () => {
    return (
        <div className="App">
            <div className="main">
                <p className="title">
                    Generate pictures using <b>DALL&#183;E</b>
                </p>
                <div className="logo-container">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
                <p className="description">Simply enter the description you need,
                    <br/>
                    and generator will take care of the rest.</p>
                <TextInput placeholder="Write a description here :)"/>
            </div>
        </div>
    );
}

export default App;

import logo from '../../logo.svg';
import './App.scss';
import TextInput from "../Input";
import Loader from "../Loader";
import Button from "../Button";

const App = () => {
    return (
        <div className="App">
            <div className="main">
                <p className="title">
                    Generate pictures using <b>DALL&#183;E</b>
                </p>
                <div className="flex">
                    <div className="logo-container">
                        <img src={logo} className="App-logo" alt="logo"/>
                    </div>
                </div>
                <p className="description">Simply enter the description you need,
                    <br/>
                    and generator will take care of the rest.</p>
                <div className="input-container">
                    <TextInput placeholder="Write a description here :)"/>
                    <div className="button-container">
                        <Button>Generate</Button>
                    </div>
                </div>
                {/*<Loader/>*/}
            </div>
        </div>
    );
}

export default App;

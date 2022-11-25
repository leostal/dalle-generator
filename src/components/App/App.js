import logo from '../../logo.svg';
import './App.scss';
import TextInput from "../Input";
import Loader from "../Loader";
import Button from "../Button";
import {Configuration, OpenAIApi} from "openai";
import {useState} from "react";

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_CONFIGURATION_KEY,
});
const openai = new OpenAIApi(configuration);

const App = () => {
    const [inputValue, setInputValue] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const generateImage = async () => {
        try {
            setLoading(true);
            const imageParameters = {
                prompt: inputValue,
                n: 1,
                size: "512x512",
            }
            const response = await openai.createImage(imageParameters);
            const urlData = response.data.data[0].url;
            setImageUrl(urlData);
            setLoading(false)
        } catch (e) {
            setImageUrl(logo);
            setLoading(false);
        }
    }

    const onInputChange = (e) => setInputValue(e.target.value);
    const onButtonClick = () => {
        generateImage();
        setInputValue('')
    }

    return (
        <div className="App">
            <div className="main">
                <p className="title">
                    Generate pictures using <b>DALL&#183;E</b>
                </p>
                <div className="flex">
                    <div className="logo-container">
                        {loading
                            ? <Loader/>
                            : <img src={imageUrl ? imageUrl : logo} className="App-logo" alt="ai picture"/>}

                    </div>
                </div>
                <p className="description">Simply enter the description you need,
                    <br/>
                    and generator will take care of the rest ;)</p>
                <div className="input-container">
                    <TextInput onChange={onInputChange} value={inputValue} placeholder="Write a description here"/>
                    <div className="button-container">
                        <Button onClick={onButtonClick} disabled={!inputValue}>Generate</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

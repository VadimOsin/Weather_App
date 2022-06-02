import React, {useState} from 'react';
import Card from "./Card";
import './Weather.css'

const Weather = () => {
    const [city, setCity] = useState('Minsk')
    // const [card,setCard]=useState()
    // const [response,setResponse]=useState()
    const [allValues, setAllValues] = useState([]);
    const requestWeather = (e) => {
        e.preventDefault()
        document.getElementById('form__inp').value = ''
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=14d84e23f572baeb9c3f9fad7404bb6b&lang=ru&units=metric`)
            .then(response => response.json())
            .then(commits => setAllValues([...allValues, {
                id: Date.now(),
                name: commits.name,
                description: commits.weather[0].description,
                temp: commits.main.temp,
                icon: commits.weather[0].icon,
            }]));
    }


    return (
        <>
            <div className="title">Weather App</div>
            <form className="form">
                <input id="form__inp" className="form__inp" onChange={(e) => setCity(e.target.value)} type="text"
                       placeholder="Введите город..."/>
                <button className="form__btn" onClick={requestWeather}>Отправить</button>
            </form>
            <div className="cardList">
                {
                    allValues.length === 0 ? '' :
                        allValues.map((value) =>
                            <Card key={value.id} name={value.name} description={value.description} temp={value.temp}
                                  icon={value.icon}/>
                        )
                }</div>
        </>
    );
};

export default Weather;
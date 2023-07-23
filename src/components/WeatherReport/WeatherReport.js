import axios from 'axios'
import { useEffect, useState } from 'react'
import './weatherReport.css'

function WeatherReport() {
    let [countryWeather, setCountryWeather] = useState([]);
    let [countryDataOne, setCountryDataOne] = useState([]);
    let [countryDataTwo, setCountryDataTwo] = useState([]);
    let [countryDataThree, setCountryDataThree] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all')
            .then((res) => {
                setCountryDataOne(res.data[67])
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get('https://restcountries.com/v2/all')
            .then((res) => {
                setCountryDataTwo(res.data[21])
            })
            .catch((error) => {
                console.log(error);
            })

        axios.get('https://restcountries.com/v2/all')
            .then((res) => {
                setCountryDataThree(res.data[87])
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    async function showWeather(countryName) {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=34551f3dab350f34fc9f6f797071cde0`)
            .then((res) => {
                setCountryWeather(res.data)
                console.log(countryWeather);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>

            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Weather Report</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Clouds: clear sky</p>
                            <p>Temperature: 289.18</p>
                            <p>Feels like: 289.24</p>
                            <p>Minimum temperature: 287.27</p>
                            <p>Maximum temperature: 291.42</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Weather Report</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Clouds: broken clouds</p>
                            <p>Temperature: 288.97</p>
                            <p>Feels like: 288.7</p>
                            <p>Minimum temperature: 287.53</p>
                            <p>Maximum temperature: 289.84</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Weather Report</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Clouds: broken clouds</p>
                            <p>Temperature: 289.9</p>
                            <p>Feels like: 289.9</p>
                            <p>Minimum temperature: 287.83</p>
                            <p>Maximum temperature: 292.01</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded mainDiv">
                <div className=" shadow card border-0" style={{ width: "18rem" }}>
                    <div className='' style={{ height: '200px', width: '100%' }}>
                        <img src={countryDataOne.flag} className="card-img-top" alt="Egypt" style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{countryDataOne.name}</h5>
                        <p className="card-text">Capital: Cairo</p>
                        <p className="card-text">Region: {countryDataOne.region}</p>
                        <p className="card-text">Country code: {countryDataOne.alpha2Code}</p>
                        <div className='text-center position-absolute bottom-0 start-50 translate-middle-x mb-3'>
                            <button type="button" className="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={() => { showWeather(countryDataOne.name) }}>Show weather</button>
                        </div>
                    </div>
                </div>
                <div className=" shadow rounded card border-0" style={{ width: "18rem", height: "450px" }}>
                    <div className='' style={{ height: '200px', width: '100%' }}>
                        <img src={countryDataTwo.flag} className="card-img-top" alt="Belgium" style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{countryDataTwo.name}</h5>
                        <p className="card-text">Capital: Brussels</p>
                        <p className="card-text">Region: {countryDataTwo.region}</p>
                        <p className="card-text">Country code: {countryDataTwo.alpha2Code}</p>
                        <div className='text-center position-absolute bottom-0 start-50 translate-middle-x mb-3'>
                            <button type="button" className="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={() => { showWeather(countryDataTwo.name) }}>Show weather</button>
                        </div>
                    </div>
                </div>
                <div className=" shadow rounded card border-0" style={{ width: "18rem" }}>
                    <div className='' style={{ height: '200px', width: '100%' }}>
                        <img src={countryDataThree.flag} className="card-img-top" alt="Greece" style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{countryDataThree.name}</h5>
                        <p className="card-text">Capital: Athens</p>
                        <p className="card-text">Region: {countryDataThree.region}</p>
                        <p className="card-text">Country code: {countryDataThree.alpha2Code}</p>
                        <div className='text-center position-absolute bottom-0 start-50 translate-middle-x mb-3'>
                            <button type="button" className="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal3" onClick={() => { showWeather(countryDataThree.name) }}>Show weather</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherReport
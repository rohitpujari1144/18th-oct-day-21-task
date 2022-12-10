var argentinaTemp=document.getElementById('argentinaTemp')
var argentinaTemp2=document.getElementById('argentinaTemp2')
var argentinaTemp3=document.getElementById('argentinaTemp3')
var dis=document.getElementById('dis')

var btn5=document.getElementById('btn5')
btn5.addEventListener('click', argentina)

function argentina()
    {
        var extractCityName=fetch('https://restcountries.com/v2/all')
        .then((res)=>
            {
                return res.json()
            })
        .then((data)=>
            {
                // console.log(data[10].name)
                var cityName=data[10].name
                // console.log(cityName)
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=40472e68613745050c66c84ca7cf9295`)
                .then((res)=>
                    {
                        return res.json()
                    })
                .then((data)=>
                    {
                        // console.log(data)
                        var temp1=data.main.temp
                        argentinaTemp.innerHTML=`Temp : ${temp1}`
                        // console.log(data.main)
                        var feelslike=data.main.feels_like
                        argentinaTemp2.innerHTML=`Feels like : ${feelslike}`
                        var tempmin=data.main.temp_min
                        argentinaTemp3.innerHTML=`Temp min : ${tempmin}`
                        var d=data.weather[0].description
                        dis.innerHTML=`${d}`
                        // console.log(data)
                    })
                .catch((err)=>
                    {
                        console.log("Some error occureed "+err)
                    })
            })
    }

var belarusTemp=document.getElementById('belarusTemp')
var belarusTemp2=document.getElementById('belarusTemp2')
var belarusTemp3=document.getElementById('belarusTemp3')
var dis1=document.getElementById('dis1')
var btn2=document.getElementById('btn2')
btn2.addEventListener('click', belarus)

function belarus()
    {
        var extractCityName=fetch('https://restcountries.com/v2/all')
        .then((res)=>
            {
                return res.json()
            })
        .then((data)=>
            {
                // console.log(data[1].name)
                var cityName1=data[20].name
                // console.log(cityName1)

                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName1}&appid=40472e68613745050c66c84ca7cf9295`)
                .then((res)=>
                    {
                        return res.json()
                    })
                .then((data)=>
                    {
                        var temp_1=data.main.temp
                        belarusTemp.innerHTML=`Temp : ${temp_1}`
                        // console.log(data.main)
                        var feelslike_1=data.main.feels_like
                        belarusTemp2.innerHTML=`Feels like : ${feelslike_1}`
                        var tempmin_1=data.main.temp_min
                        belarusTemp3.innerHTML=`Temp min : ${tempmin_1}`
                        var d=data.weather[0].description
                        dis1.innerHTML=`${d}`
                        // console.log(data)
                    })
                .catch((err)=>
                    {
                        console.log("Some error occureed "+err)
                    })
            })
    }

var andorra1=document.getElementById('ukr')
var andorra2=document.getElementById('ukr2')
var andorra4=document.getElementById('ukr4')
var dis2=document.getElementById('dis2')
var btn1=document.getElementById('btn1')

btn1.addEventListener('click', andorra)

function andorra()
    {
        var extractCityName=fetch('https://restcountries.com/v2/all')
        .then((res)=>
            {
                return res.json()
            })
        .then((data)=>
            {
                var cityName2=data[5].name
                // console.log(cityName2)

                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName2}&appid=40472e68613745050c66c84ca7cf9295`)
                .then((res)=>
                    {
                        return res.json()
                    })
                .then((data)=>
                    {
                        var temp_2=data.main.temp
                        andorra1.innerHTML=`Temp : ${temp_2}`
                        // console.log(data.main)
                        var feelslike_1=data.main.feels_like
                        andorra2.innerHTML=`Feels like : ${feelslike_1}`
                        var tempmin_1=data.main.temp_min
                        andorra4.innerHTML=`Temp min : ${tempmin_1}`
                        var d=data.weather[0].description
                        dis2.innerHTML=`${d}`
                        // console.log(data)
                    })
                .catch((err)=>
                    {
                        console.log("Some error occureed "+err)
                    })
            })
    }   
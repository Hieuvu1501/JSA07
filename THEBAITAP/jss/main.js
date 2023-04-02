const handlegetQuote = async () => {
    const Hieu = await axios.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Ha%20noi?unitGroup=metric&key=484DCQEQR8WZWTPM9GJLH7BH6&contentType=json')
    const data = Hieu.data
    renderDays(data)
    console.log(data);

}
const weather = document.querySelector('#weather')
handlegetQuote() 

const renderDays = (items) => {
    const khocDe = document.createElement('div')
    khocDe.innerHTML = `
    <p> latitude : ${items.latitude}</p>
    <p>longtitude : ${items.longtitude}</p>
    <p>description: ${items.description}</p>
    <p>resolvedAddress: ${items.resolvedAddress}</p>
    <p>timezone: ${items.timezone}</p>
    `
    weather.appendChild(khocDe)}



const handlegetQuote = async () => {
    const Hieu = await axios.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Ha%20noi?unitGroup=metric&key=484DCQEQR8WZWTPM9GJLH7BH6&contentType=json')
    const data = Hieu.data
    renderDays(data)
    renderItems(data)
    console.log(data);

}
const cuoi = document.querySelector('#cuoi')
const khoc = document.querySelector('#khoc')
handlegetQuote() 


const renderDays = (items) => {
    console.log(items);
    const html = items.days.map(
        (item, index) => {
            return`
                <div>conditions:${item.conditions} <div/>
                <div>description:${item.description} <div/>
                <div>feelslike:${item.feelslike} <div/>
                <div>feelslikemax:${item.feelslikemax} <div/>
                <div>feelslikemin:${item.feelslikemin} <div/>`
        }
    )
cuoi.innerHTML= html.join('')
}

const renderItems = (items) => {
    const khocDe = document.createElement('div')
    khocDe.innerHTML = `
    <p> latitude : ${items.latitude}</p>
    <p>longtitude : ${items.longtitude}</p>
    <p>description: ${items.description}</p>
    <p>resolvedAddress: ${items.resolvedAddress}</p>
    <p>timezone: ${items.timezone}</p>
    `
    khoc.appendChild(khocDe)}



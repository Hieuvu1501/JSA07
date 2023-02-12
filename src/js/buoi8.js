const link = 'https://api.escuelajs.co/api/v1/products'
const Hieu = () =>{
    axios.get(link)
    .then((response) => {
        const data = response.data
       console.log(data);
    })
}   
Hieu()

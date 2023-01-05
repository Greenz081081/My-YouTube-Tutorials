const requestUrl = "";
const products = document.querySelector(".buildCards");

async function getProducts () {
    let response = await fetch(requestUrl);
    if (response.ok) {
        let data = await response.json();
        console.log(data);
    } else {
        throw Error(response.statusText);
    }
}

getProducts();
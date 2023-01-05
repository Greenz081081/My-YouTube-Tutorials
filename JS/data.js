const requestUrl = "https://greenz081081.github.io/My-YouTube-Tutorials/JSON/data.json";

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
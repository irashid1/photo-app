// import axios from "axios";

const GetImages = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",

    };

    fetch("https://v1.nocodeapi.com/irashid1/instagram/gcHxQRoXCQGJdxhH", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}

export default GetImages;
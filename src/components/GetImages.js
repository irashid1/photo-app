// import axios from "axios";

const GetImages = () => {
    
    // console.log("hello world!!");

    // const options = {
    //     method: 'GET',
    //     url: 'https://instagram-media-downloader.p.rapidapi.com/rapid/profile.php',
    //     params: { url: 'instarashid' },
    //     headers: {
    //         'X-RapidAPI-Host': 'instagram-media-downloader.p.rapidapi.com',
    //         'X-RapidAPI-Key': 'ec06c7d0e1msh62a1da6307fa760p178765jsn4fa050ac4ec4'
    //     }
    // };

    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });

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




    // Firebase

    // // Import the functions you need from the SDKs you need
    // import { initializeApp } from "firebase/app";
    // // TODO: Add SDKs for Firebase products that you want to use
    // // https://firebase.google.com/docs/web/setup#available-libraries

    // // Your web app's Firebase configuration

    // const firebaseConfig = {
    //     apiKey: "AIzaSyBJ8qGrtVHkq2p57GXawwK63v7t473WiiI",
    //     authDomain: "photo-app-40b0e.firebaseapp.com",
    //     projectId: "photo-app-40b0e",
    //     storageBucket: "photo-app-40b0e.appspot.com",
    //     messagingSenderId: "541485290871",
    //     appId: "1:541485290871:web:59564375ffdac475b17d72"
    // };

    // // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    // export default app;


    

}

export default GetImages;
console.log("hello");

function loadNASAData(){
    console.log("loadNasaData");

    
    //before we call, show a loading image
   
    let loadingimage1 = "https://th.bing.com/th/id/OIP.oCZov8_EkDqrgaeYOBuJqAHaEo?w=303&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7";

    let loadingimage2 = "https://th.bing.com/th/id/OIP.1NnxACHO9x8FwrxrDBJ63AHaDm?w=342&h=170&c=7&r=0&o=5&dpr=1.3&pid=1.7";


    document.getElementById('image').src = loadingimage2;

     //fetch call 

    //we need to provide the NASA API ENDPOINT.

    //JjP84CKefxzmg2fyAvN4zWsRyAAqg1nzrXvHdtc6
    //https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

    let apikey = "JjP84CKefxzmg2fyAvN4zWsRyAAqg1nzrXvHdtc6";
    let url = "https://api.nasa.gov/planetary/apod?api_key=" + apikey;

    console.log(url);

    fetch(url).then(function (response) {
        return response.json();
    }
    ).then(function (json) {

        //console.log(json);

        let title = json.title;
        let date = json.date;
        let explanation = json.explanation;
        let url = json.url;
        let media_type = json.media_type;
        let hdurl = json.hdurl;

        console.log(`title: ${title}`);
        console.log(`date: ${date}`);
        console.log(`explanation: ${explanation}`);
        console.log(`url: ${url}`);
        console.log(`media_type: ${media_type}`);
        console.log(`hdurl: ${hdurl}`);

        document.getElementById("title").innerHTML = title;
        document.getElementById("date").innerHTML = date;
        document.getElementById("explanation").innerHTML = explanation;

        document.getElementById("image").src = hdurl;



        // let html = `<h1>${title}</h1>
        //             <p>${date}</p>
        //             <p>${explanation}</p>
        //             <img src="${url}" alt="${title}">`

        // document.getElementById("nasa").innerHTML = html;

    }).catch(function (error) {
        console.log(error);
    });

}


// // так берется информация с Бэкенда fetch
// const Http = new XMLHttpRequest()
// const url = "https://jsonplaceholder.typicode.com/posts";

// Http.open("Get",url);
// Http.send();

// Http.onreadystatechange = () =>{
//     console.log(Http.responseText);
// }

const arrayData = []


fetch('https://jsonplaceholder.typicode.com/posts')
.then((resp)=>resp.json())
.then((data)=>{
    arrayData.push(data)
    info_data(arrayData)
   
    // console.log(arrayData);




    // arrayData.forEach(item =>{
    //     console.log(item);
    //     item.forEach(element =>{
    //         // console.log(element.title);
    //     })
    // })
});

function info_data(array_respons) {
    array_respons.forEach(item =>{
    item.forEach(element=>{
        const body = document.querySelector("body");
        const tag_h1 = document.createElement("h1");
        tag_h1.innerHTML = element.title
        tag_h1.className ="title"
        const tag_p = document.createElement("p")
        tag_p.className = "info_content"
        tag_p.innerHTML = element.body
        const div = document.createElement("div")
        div.className ="container"
        div.appendChild(tag_h1)
        div.appendChild(tag_p)
        body.append(div)
    })
    })


}
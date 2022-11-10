<<<<<<< HEAD
let url = "https://api.github.com/users/chasacademy-Caius-Matei/repos";
=======
let url = "/json/cv.json";

>>>>>>> 55cf3745c7c5814a7f89aef22cef022e6aaee9f8
const experience = document.querySelector('.jobs');
const Education = document.querySelector('.Educate')
async function cv (){
    let response = await fetch(url);
    
    if (response.ok){
        let data = await response.json();
       /*  console.log(data); */

       data.Jobs.forEach(element => {
        let thelist = document.createElement('li');
        thelist.setAttribute("id", "cv-list");
        thelist.innerHTML =  `${element.Heading} ${element.Title} ${element.Location}`;
        Jobs.appendChild(thelist);
       });
     data.Educations.forEach(element =>{
        let edu = document.createElement('li');
        edu.setAttribute("id", "educations");
        edu.innerHTML = `${element.Title}`;
        Education.appendChild(edu);
        
     });
    }
    else  {
        console.log("http-error" + response.status);

    }
}
cv();

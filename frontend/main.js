window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})
const functionApiURL ='https://azureresume14.azurewebsites.net/api/GetResumeCounter?code=EwxtJknTymKC5-kyWZ3UWSh8_VLNvuNhJeJRHHGH73GLAzFu7nbkyQ==';
const localFunctionApi ='http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count =30;
    fetch(functionApiURL).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count =response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;

}
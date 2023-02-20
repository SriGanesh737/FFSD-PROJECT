


const medicalBaseString="./images/health-"
let medicalIndex=1,medicalCapacity=11;

const slider=()=>{
    medicalIndex=(medicalIndex+1)%medicalCapacity;
    if(medicalIndex==0)medicalIndex++;
     $('.highlights-img').attr('src', medicalBaseString+medicalIndex+'.jpg');
}


setInterval(() => {

}, 2000);
setInterval(slider, 2000);
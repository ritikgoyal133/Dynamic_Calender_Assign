// window.alert("Hello Ritik");
var date = new Date();
// console.log(date);

function render_body(){

//For Date dynamically change
document.getElementById("today_date").innerHTML=date.toDateString();

//For Getting month as a name not by number so intialiaze month of an array

var month = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//For Month dynamically change
document.getElementById("month").innerHTML=month[date.getMonth()];

//Getting end date of perticular month because every month have perticular own end date eg. 28,29,30,31

var end_date = new Date(date.getFullYear(), date.getMonth() +1,0).getDate();

//1june->0== 31may->getdate = 31
var prev_date = new Date(date.getFullYear(), date.getMonth(),0).getDate();

// var next_month_date = new Date(date.getFullYear(), date.getMonth()+1).getDate();

var day = date.getDay();
//so 2 occur represent tuesday

var today_date = date.getDate();
//For today date highlight purpose

// var today_month = date.getMonth();

var date_data = "";

//For previous day data 
for(j = day; j>0; j-- ){
    date_data += "<div class = 'prev_month_date'>" + (prev_date-j+1) + "</div>";
}

//For current date with perticular day
for(i=1; i<=end_date;i++){
    if(i == today_date){
        date_data += "<div class ='today_date'>" + i + "</div>";
    } else{
    date_data += "<div>" + i + "</div>";
    }
}


document.getElementsByClassName("days")[0].innerHTML =date_data;

}

function render_month(render){
    if(render == 'prev'){
        date.setMonth(date.getMonth()-1);
    } else if (render == 'next'){
        date.setMonth(date.getMonth()+1);
    }

    render_body();
}
// function render_month(prev){
//     return  date.setMonth(date.getMonth()-1);
// }









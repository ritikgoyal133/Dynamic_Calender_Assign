var date = new Date();

//For Getting month as a name not by number so intialiaze month of an array

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//For Getting weekdays as a name not by number so intialiaze weekdays of an array
// var days = ["sunday", "monday", "tuesday", "wednesday", "thrusday", "friday", "saturday"];

function renderBody() {

    //For Date dynamically change
    document.getElementById("todayDate").innerHTML = date.toDateString();

    //For Month dynamically change
    document.getElementById("month").innerHTML = months[date.getMonth()];

    //Getting end date of perticular month because every month have perticular own end date eg. 28,29,30,31

    //(2022, 5+1,0) => (2022, 6,0).getDate() => (1july,o) => 30June

    var endDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    var endDateDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    //1june->0== 31may->getdate = 31 May
    var prevDate = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    // var next_month_date = new Date(date.getFullYear(), date.getMonth()+1).getDate();

    const day = date.getDay();
    //so 2 occur represent tuesday

    var todayDate = date.getDate();
    //For today date highlight purpose

    let dateData = " ";

    // For previous day data 
    for (let j = (day - 1); j > 0; j--) {
        dateData += "<div class = 'prevMonthDate'>" + (prevDate - j + 1) + "</div>";
    }

    // For current date with perticular day
    for (let i = 1; i <= endDate; i++) {
        if (i == todayDate) {
            dateData += "<div class ='todayDate'>" + i + "</div>";
        } else {
            dateData += "<div>" + i + "</div>";
        }
    }

    document.getElementsByClassName("days")[0].innerHTML = dateData;

}

function renderMonth(render) {
    if (render == 'prev') {
        date.setMonth(date.getMonth() - 1);
    } else if (render == 'next') {
        date.setMonth(date.getMonth() + 1);
    }

    renderBody();
}










let url = "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces"

fetch(url).then((res) => {
    return res.json()
})
.then((data) => {
    insertData(data)
})

function insertData(data) {
    console.log(data)
    var mainContainer = document.getElementById("myData")
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div")
        div.innerHTML = 'Province: ' + data[i].province +"<br>" + 'New case: ' + data[i].new_case +"<br>" + 'Total case: ' + data[i].total_case +"<br>" + 'date: ' + data[i].txn_date
        mainContainer.appendChild(div).style.border="2px solid red";
    }
}

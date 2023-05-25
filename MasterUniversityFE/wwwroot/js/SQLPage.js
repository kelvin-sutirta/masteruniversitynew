/* fetch('https://localhost:7218/api/PerformanceComparison/testInsert/1', {
    mode: 'no-cors',
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(1)
})
*/
 //   .then(res => res.json())
 //   .then(data=>console.log(data))
//'data': JSON.stringify({ "baseItemId": "2" }),




/*fetch('https://localhost:7218/api/PerformanceComparison/testInsert/1000')
    .then(response => {
        console.log(response);
    })
    .then(data => {
        console.log(data);
    });
    */

$("#buttonPerfSQL").click(function () {
    buttonPerfSQL();
});
function buttonPerfSQL() {
    var data =
    {
        'DataAmount': $('#dataAmount').val(),
    }
    console.log(data);
    data = {'Data': JSON.stringify(data) };
               $.ajax({
                    method: "POST",
                    url: '/SQL/SQLPerformance',
                    data: data,
                    "datatype": "json"
                }); 
            }


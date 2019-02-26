/*!
 * 
 * Google Sheets To HTML v0.9a
 * 
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 * 
 * The Google document's sharing must be set to public
 * 
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    //var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/13Mb-Rerw0716AgAljf5vg7EKFRB1fUV9233SD_KoKn0/edit?usp=sharing');
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1ZAVnmfwwenQ9-2Sgr-UQ6HW1WjCpoILL2GQCMXthL6Y/edit#gid=0');
    query.setQuery('SELECT A, B, C, D, E, F, G, H label A "S/N", B "STATES", C "APC", D "PDP",E "DIFFERENCE",F "WHO WON",G "% APC",H "% PDP"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom'
    });
}
google.setOnLoadCallback(drawVisualization);

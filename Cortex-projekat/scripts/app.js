// Hamburger menu
let hamburger = document.querySelector(".hamburger");
let navigacija = document.querySelector(".navigacija");
let main = document.querySelector(".main");

hamburger.addEventListener("click", () => {
  navigacija.classList.toggle("active");
  main.classList.toggle("active");
});

// hovered class in selected list item
let list = document.querySelectorAll(".navigacija li");
function aktivanLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", aktivanLink));

// Statistika chart
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Mjesec', 'Izdate knjige', 'Rezervisane knjige', 'Knjige u prekoračenju'],
    ['Januar', 50, 67, 28],
    ['Februar', 11, 20, 43],
    ['Mart', 72, 8, 20],
    ['April', 24, 3, 49],
    ['Maj', 50, 67, 28],
    ['Jun', 11, 20, 43],
    ['Jul', 72, 8, 20],
    ['Avgust', 24, 3, 49]
  ]);

  var options = {
    chart: {
      title: '',
      subtitle: 'Izdate knjige, rezervisane knjige i knjige u prekoračenju: januar-avgust 2023',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

// amcharts
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4geodata_swedenLow from "@amcharts/amcharts4-geodata/swedenLow";

am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

export const renderMap = (chartId, mapData) => {
    mapData = [
        {
            id: "SE-AC",
            name: "Västerbotten",
            value: 5
        },
        {
            id: "SE-AB",
            name: "Stockholm",
            value: 207
        },
        {
            id: "SE-BD",
            name: "Norrbotten",
            value: 2
        },
        {
            id: "SE-C",
            name: "Uppsala",
            value: 8
        },
        {
            id: "SE-D",
            name: "Södermanland",
            value: 2
        },
        {
            id: "SE-E",
            name: "Östergötland",
            value: 1
        },
        {
            id: "SE-F",
            name: "Jönköping",
            value: 10
        },
        {
            id: "SE-G",
            name: "Kronoberg",
            value: 1
        },
        {
            id: "SE-H",
            name: "Kalmar",
            value: 0
        },
        {
            id: "SE-I",
            name: "Gotland",
            value: 0
        },
        {
            id: "SE-K",
            name: "Blekinge",
            value: 0
        },
        {
            id: "SE-M",
            name: "Skåne",
            value: 25
        },
        {
            id: "SE-N",
            name: "Halland",
            value: 9
        },
        {
            id: "SE-O",
            name: "Västra Götaland",
            value: 48
        },
        {
            id: "SE-S",
            name: "Värmland",
            value: 22
        },
        {
            id: "SE-T",
            name: "Örebro",
            value: 5
        },
        {
            id: "SE-U",
            name: "Västmanland",
            value: 0
        },
        {
            id: "SE-W",
            name: "Dalarna",
            value: 0
        },
        {
            id: "SE-X",
            name: "Gävleborg",
            value: 2
        },
        {
            id: "SE-Y",
            name: "Västernorrland",
            value: 6
        },
        {
            id: "SE-Z",
            name: "Jämtland",
            value: 1
        }
    ];
    let chart = am4core.create(chartId, am4maps.MapChart);
    // Set map definition
    chart.geodata = am4geodata_swedenLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
        property: "fill",
        target: polygonSeries.mapPolygons.template,
        min: chart.colors.getIndex(1).brighten(1),
        max: chart.colors.getIndex(1).brighten(-0.3)
    });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;

    // Set heatmap values for each state
    polygonSeries.data = mapData;

    // Set up heat legend
    let heatLegend = chart.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeries;
    heatLegend.align = "right";
    heatLegend.valign = "bottom";
    heatLegend.width = am4core.percent(20);
    heatLegend.marginRight = am4core.percent(4);
    heatLegend.minValue = 0;
    heatLegend.maxValue = 40000000;

    // Set up custom heat map legend labels using axis ranges
    let minRange = heatLegend.valueAxis.axisRanges.create();
    minRange.value = heatLegend.minValue;
    minRange.label.text = "Little";
    let maxRange = heatLegend.valueAxis.axisRanges.create();
    maxRange.value = heatLegend.maxValue;
    maxRange.label.text = "A lot!";

    // Blank out internal heat legend value axis labels
    heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(
        labelText
    ) {
        return "";
    });

    // Configure series tooltip
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#3c5bdc");
    return chart;
};

export const renderRadarChart = (chartId, data) => {
    data = [
        {
            id: "SE-AC",
            name: "Västerbotten",
            value: 5
        },
        {
            id: "SE-AB",
            name: "Stockholm",
            value: 207
        },
        {
            id: "SE-BD",
            name: "Norrbotten",
            value: 2
        },
        {
            id: "SE-C",
            name: "Uppsala",
            value: 8
        },
        {
            id: "SE-D",
            name: "Södermanland",
            value: 2
        },
        {
            id: "SE-E",
            name: "Östergötland",
            value: 1
        },
        {
            id: "SE-F",
            name: "Jönköping",
            value: 10
        },
        {
            id: "SE-G",
            name: "Kronoberg",
            value: 1
        },
        {
            id: "SE-M",
            name: "Skåne",
            value: 25
        },
        {
            id: "SE-O",
            name: "Västra Götaland",
            value: 48
        },
        {
            id: "SE-S",
            name: "Värmland",
            value: 22
        },
        {
            id: "SE-T",
            name: "Örebro",
            value: 5
        },
        {
            id: "SE-X",
            name: "Gävleborg",
            value: 2
        },
        {
            id: "SE-Y",
            name: "Västernorrland",
            value: 6
        },
        {
            id: "SE-Z",
            name: "Jämtland",
            value: 1
        }
    ];
    let chart = am4core.create(chartId, am4charts.RadarChart);
    chart.data = data;

    chart.innerRadius = am4core.percent(40);

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "name";
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.labels.template.location = 0.5;
    categoryAxis.renderer.grid.template.strokeOpacity = 0.08;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.extraMax = 0.1;
    valueAxis.renderer.grid.template.strokeOpacity = 0.08;

    chart.seriesContainer.zIndex = -10;

    let series = chart.series.push(new am4charts.RadarColumnSeries());
    series.dataFields.categoryX = "name";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.radarColumn.cornerRadius = 5;
    series.columns.template.radarColumn.innerCornerRadius = 0;

    chart.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", (fill, target) => {
        return chart.colors.getIndex(target.dataItem.index);
    });

    categoryAxis.sortBySeries = series;

    chart.cursor = new am4charts.RadarCursor();
    chart.cursor.behavior = "none";
    chart.cursor.lineX.disabled = true;
    chart.cursor.lineY.disabled = true;

    return chart;
};

export const renderLineChart = (chartId, lineData) =>{
    let chart = am4core.create(chartId, am4charts.XYChart);

    let data = [];

    data.push({ date: new Date(2020, 0, 31), value1: 1, value2:1 });
    data.push({ date: new Date(2020, 1, 26), value1: 1,value2:1 });
    data.push({ date: new Date(2020, 1, 27), value1: 7,value2:6 });
    data.push({ date: new Date(2020, 1, 28), value1: 11,value2:5 });
    data.push({ date: new Date(2020, 1, 29), value1: 13,value2:2 });
    data.push({ date: new Date(2020, 2, 1), value1: 14,value2:1 });
    data.push({ date: new Date(2020, 2, 2), value1: 15,value2:1 });
    data.push({ date: new Date(2020, 2, 3), value1: 30,value2:15 });
    data.push({ date: new Date(2020, 2, 4), value1: 52,value2:22 });
    data.push({ date: new Date(2020, 2, 5), value1: 94,value2:42 });
    data.push({ date: new Date(2020, 2, 6), value1: 137,value2:43 });
    data.push({ date: new Date(2020, 2, 7), value1: 162,value2:24 });
    data.push({ date: new Date(2020, 2, 8), value1: 203,value2:42 });
    data.push({ date: new Date(2020, 2, 9), value1: 261,value2:57});
    data.push({ date: new Date(2020, 2, 10), value1: 355,value2:95, disabled:false });
    chart.data = data;

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 50;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
    var series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value1";
    series.dataFields.dateX = "date";
    series.strokeWidth = 3;
    series.strokeDasharray = "5,4";
    series.name = "confirmed";
    series.minBulletDistance = 10;
    series.tooltipText = "[bold]{date.formatDate()}:[/] {value1}\n[bold]{previousDate.formatDate()}:[/] {value2}";
    series.tooltip.pointerOrientation = "vertical";

    const bullet_1 = series.bullets.push(new am4charts.CircleBullet());
    bullet_1.disabled = true;
    bullet_1.propertyFields.disabled = "disabled";

    const secondCircle_1 = bullet_1.createChild(am4core.Circle);
    secondCircle_1.radius = 6;
    secondCircle_1.fill = chart.colors.getIndex(8);


    bullet_1.events.on("inited", function(event){
        animateBullet(event.target.circle);
    });

// Create series
    var series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "value2";
    series2.dataFields.dateX = "date";
    series2.strokeWidth = 2;
    series2.strokeDasharray = "3,4";
    series2.stroke = series.stroke;
    const bullet_2 = series2.bullets.push(new am4charts.CircleBullet());
    bullet_2.disabled = true;
    bullet_2.propertyFields.disabled = "disabled";

    const secondCircle_2 = bullet_2.createChild(am4core.Circle);
    secondCircle_2.radius = 6;
    secondCircle_2.fill = chart.colors.getIndex(2);


    bullet_2.events.on("inited", function(event){
        animateBullet(event.target.circle);
    });
// Add cursor
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.xAxis = dateAxis;

// Add simple bullet


    return chart;
};

const animateBullet = (bullet) => {
    var animation = bullet.animate([{ property: "scale", from: 1, to: 5 }, { property: "opacity", from: 1, to: 0 }], 1000, am4core.ease.circleOut);
    animation.events.on("animationended", function(event){
        animateBullet(event.target.object);
    })
}
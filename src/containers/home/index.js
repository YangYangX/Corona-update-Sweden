/**
 *
 * home page
 *
 * This uiComponent is the home page not found page.
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { translate } from "react-i18next";

import { Link } from "react-router-dom";

// UI framework
import { illustration, logo } from "../../assets";
import { Pane, Text, Heading } from "evergreen-ui";
import { Statistic } from "semantic-ui-react";
// amcharts
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4geodata_swedenLow from "@amcharts/amcharts4-geodata/swedenLow";

// Style
import "./index.css";

am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

// Class Home, basic uiComponent for application
class Home extends Component {
  /**
   * constructor function
   * @param {*} props
   */
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.radarChart = this._renderRadarChat();
    this._renderMap();
    this._renderLine();
  }

  _renderRadarChat() {
    let chart = am4core.create("radar-chart", am4charts.RadarChart);
    chart.data = [
      {
        country: "Stockholm",
        visits: 147
      },
      {
        country: "Västra Götaland",
        visits: 33
      },
      {
        country: "Skåne",
        visits: 22
      },
      {
        country: "Värmland",
        visits: 21
      },
      {
        country: "Uppsala",
        visits: 9
      },
      {
        country: "Halland",
        visits: 5
      },
      {
        country: "Västerbotten",
        visits: 5
      },
      {
        country: "Örebro län",
        visits: 4
      },
      {
        country: "Gävleborg",
        visits: 2
      },
      {
        country: "Norrbotten",
        visits: 1
      },
      {
        country: "Östergötland",
        visits: 1
      },
      {
        country: "Sörmland",
        visits: 1
      }
    ];

    chart.innerRadius = am4core.percent(40);

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
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
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
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
  }

  _renderMap() {
    let chart = am4core.create("map-chart", am4maps.MapChart);
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
    polygonSeries.data = [
      {
        id: "SE-AC",
        name: "Västerbotten",
        value: 5
      },
      {
        id: "SE-AB",
        name: "Stockholm",
        value: 147
      },
      {
        id: "SE-BD",
        name: "Norrbotten",
        value: 1
      },
      {
        id: "SE-C",
        name: "Uppsala",
        value: 9
      },
      {
        id: "SE-D",
        name: "Södermanland",
        value: 0
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
        value: 0
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
        value: 22
      },
      {
        id: "SE-N",
        name: "Halland",
        value: 5
      },
      {
        id: "SE-O",
        name: "Västra Götaland",
        value: 33
      },
      {
        id: "SE-S",
        name: "Värmland",
        value: 21
      },
      {
        id: "SE-T",
        name: "Örebro",
        value: 4
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
        value: 0
      },
      {
        id: "SE-Z",
        name: "Jämtland",
        value: 0
      }
    ];

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
  }

  _renderLine() {
    let chart = am4core.create("line-chart", am4charts.XYChart);
    chart.paddingRight = 20;

    let data = [];

    data.push({ date: new Date(2020, 0, 31), value: 1 });
    data.push({ date: new Date(2020, 1, 26), value: 1 });
    data.push({ date: new Date(2020, 1, 27), value: 7 });
    data.push({ date: new Date(2020, 1, 28), value: 11 });
    data.push({ date: new Date(2020, 1, 29), value: 13 });
    data.push({ date: new Date(2020, 2, 1), value: 14 });
    data.push({ date: new Date(2020, 2, 2), value: 15 });
    data.push({ date: new Date(2020, 2, 3), value: 30 });
    data.push({ date: new Date(2020, 2, 4), value: 52 });
    data.push({ date: new Date(2020, 2, 5), value: 94 });
    data.push({ date: new Date(2020, 2, 6), value: 137 });
    data.push({ date: new Date(2020, 2, 7), value: 162 });
    data.push({ date: new Date(2020, 2, 8), value: 203 });
    data.push({ date: new Date(2020, 2, 9), value: 261 });
    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.axisFills.template.disabled = false;
    dateAxis.renderer.ticks.template.disabled = false;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = false;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.axisFills.template.disabled = false;
    valueAxis.renderer.ticks.template.disabled = true;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 2;
    series.tooltipText = "value: {valueY}, day change: {valueY.previousChange}";

    // set stroke property field
    series.propertyFields.stroke = "color";

    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX = scrollbarX;

    dateAxis.start = 0;
    dateAxis.keepSelection = true;
    dateAxis.baseInterval = {
      "timeUnit": "day",
      "count": 1
    };
    dateAxis.dateFormats.setKey("day", "MMMM dt");
    dateAxis.renderer.minGridDistance = 168;
    return chart;
  }
  componentWillUnmount() {
    if (this.radarChart) {
      this.radarChart.dispose();
    }
  }

  render() {
    const { t } = this.props;

    return (
      <div>
        <table cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td>
                <Pane className={"main-map-widget"} border="none">
                  <div className={"main-content"}>
                    <div
                      id="map-chart"
                      style={{ width: "100%", height: "100%" }}
                    ></div>
                  </div>
                </Pane>
              </td>
              <td>
                <tr>
                  <Pane
                    className={"main-pie-widget"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="none"
                  >
                    <div className={"main-content"}>
                      <div
                        id="radar-chart"
                        style={{ width: "100%", height: "100%" }}
                      ></div>
                    </div>
                  </Pane>
                </tr>
                <tr>
                  <td>
                    <table cellSpacing="0" cellPadding="0">
                      <tbody>
                        <tr>
                          <td>
                            <Pane className={"main-info-widget"} border="none">
                              <div className={"main-content"}>
                                <Statistic color="red" inverted>
                                  <Statistic.Value>261</Statistic.Value>
                                  <Statistic.Label>confirmed</Statistic.Label>
                                </Statistic>
                              </div>
                            </Pane>
                          </td>
                          <td>
                            <Pane
                              className={"main-info-widget"}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              border="none"
                            >
                              <div className={"main-content"}>
                                <Statistic color="red" inverted>
                                  <Statistic.Value>58</Statistic.Value>
                                  <Statistic.Label>
                                    Newly increased today
                                  </Statistic.Label>
                                </Statistic>
                              </div>
                            </Pane>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <Pane
                    className={"main-line-widget"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    border="none"
                  >
                    <div className={"main-content"}>
                      <div
                        id="line-chart"
                        style={{ width: "100%", height: "100%" }}
                      ></div>
                    </div>
                  </Pane>
                </tr>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// Default props
Home.defaultProps = {};

// Prop attributes types
Home.propTypes = {};

/**
 * mapStateToProps is a function provided to pull data from the store when it changes,
 * and pass those values as props to your uiComponent.
 *
 * @param {*} state
 */
const mapStateToProps = state => ({});

/**
 * mapDispatchToProps is a function provided to make use of the store's dispatch function,
 * usually by creating pre-bound versions of action creators that will automatically
 * dispatch their actions as soon as they are called.
 *
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => ({});

// Export Home container

export default compose(
  translate(["home"], { wait: true }),
  connect(mapStateToProps, mapDispatchToProps, null, { pure: false })
)(Home);

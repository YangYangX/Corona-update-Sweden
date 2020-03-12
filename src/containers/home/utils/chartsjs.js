import React from "react";
import * as _ from "lodash";
import { fromJS } from "immutable";

export const generateCaseTrends = (t, data) => {
  let labels = [];
  let cases = [];
  let increased = [];
  let died = [];

  if (data.get("states", []).length > 0) {
    // Just take the first item and get the labels
    labels = _.map(data.get("states")[0].data, item => {
      return item.date;
    });

    // get increased cases
    _.forEach(data.get("states"), state => {
      _.forEach(state.data, stateData => {
        increased[stateData.date] =
          (increased[stateData.date] || 0) + parseInt(stateData.case);
      });
    });

    // get total cases
    _.forEach(labels, date => {
      const pervious = _.last(_.values(cases)) || 0;
      cases[date] = pervious + increased[date];
    });

    // get died cases
    _.forEach(data.get("states"), state => {
      _.forEach(state.data, stateData => {
        died[stateData.date] =
          (died[stateData.date] || 0) + parseInt(stateData.died);
      });
    });
  }

  return {
    trend: {
      labels: labels,
      datasets: [
        {
          label: t("dashboard:total"),
          fill: false,
          lineTension: 0.2,
          backgroundColor: "#fff",
          borderColor: "#e14d57",
          borderWidth: 1.5,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#e14d57",
          pointBackgroundColor: "#e14d57",
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#e14d57",
          pointHoverBorderColor: "#e14d57",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: _.values(cases)
        },
        {
          label: t("dashboard:increased"),
          fill: false,
          lineTension: 0.2,
          backgroundColor: "#fff",
          borderColor: "#ffc617",
          borderWidth: 1.5,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#ffc617",
          pointBackgroundColor: "#ffc617",
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#ffc617",
          pointHoverBorderColor: "#ffc617",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: _.values(increased)
        },
        {
          label: t("dashboard:dead"),
          fill: false,
          lineTension: 0.2,
          backgroundColor: "#fff",
          borderColor: "#1b262c",
          borderWidth: 1.5,
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#1b262c",
          pointBackgroundColor: "#1b262c",
          pointBorderWidth: 5,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#1b262c",
          pointHoverBorderColor: "#1b262c",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: _.values(died)
        }
      ]
    },
    options: {
      layout: {
        padding: {
          left: -50,
          right: 0,
          top: 0,
          bottom: 0
        }
      },

      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
        align: "end",
        labels: {
          boxWidth: 15,
          fontColor: "rgba(255,255,255,.3)"
        }
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              color: "rgba(255,255,255,.1)",
              borderDash: [5]
            },
            ticks: {
              fontColor: "rgba(255,255,255,.3)"
            }
          }
        ],
        xAxes: [
          {
            type: 'time',
            time: {
              displayFormats: {
                quarter: 'MMM YYYY'
              }
            },
            gridLines: {
              color: "rgba(255,255,255,.25)",
              borderDash: [5],
              zeroLineColor: "rgba(255,255,255,.25)"
            },
            ticks: {
              fontColor: "rgba(255,255,255,.3)"
            }
          }
        ]
      }
    }
  };
};

export const generateCasePerState = (t, data, chart) => {

  if(!chart) {
    return;
  }

  let mapData = [];

  if (data.get("states", []).length > 0) {
    // get increased cases
    _.forEach(data.get("states"), state =>
      mapData.push({
        id: state.id,
        name: state.name,
        value: _.reduce(state.data, (sum, item) => sum + parseInt(item.case), 0)
      })
    );
  }

  chart.data = mapData;
};

export const generateInfoTablePerState = (data) => {

  let tableData = [];

  if (data.get("states", []).length > 0) {
    // get increased cases
    _.forEach(data.get("states"), state =>
        tableData.push({
          id: state.id,
          name: state.name,
          total: _.reduce(state.data, (sum, item) => sum + parseInt(item.case), 0),
          increase: parseInt(_.last(state.data).case)
        })
    );
  }

  return tableData;
};


export const getUpdateTime = (data) => {
  return  data.get("updatedAt", "****-**-** --:--:--");
};

export const getNews = (data) => {
  return  data.get("news", []);
};

export const getStats = (data) => {
  let labels = [];
  let cases = [];
  let increased = [];
  let died = [];

  if (data.get("states", []).length > 0) {
    // Just take the first item and get the labels
    labels = _.map(data.get("states")[0].data, item => {
      return item.date;
    });

    // get increased cases
    _.forEach(data.get("states"), state => {
      _.forEach(state.data, stateData => {
        increased[stateData.date] =
            (increased[stateData.date] || 0) + parseInt(stateData.case);
      });
    });

    // get total cases
    _.forEach(labels, date => {
      const pervious = _.last(_.values(cases)) || 0;
      cases[date] = pervious + increased[date];
    });

    // get died cases
    _.forEach(data.get("states"), state => {
      _.forEach(state.data, stateData => {
        died[stateData.date] =
            (died[stateData.date] || 0) + parseInt(stateData.died);
      });
    });
    return {
      total: _.last(_.values(cases)),
      increased: _.last(_.values(increased)),
      died: _.last(_.values(died)),
    }
  }

  return {
    total: "-",
    increased: "-",
    died: "-",
  }

};

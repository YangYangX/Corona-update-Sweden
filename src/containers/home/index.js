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
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import * as _ from "lodash";
// UI framework
import {
  Statistic,
  Grid,
  Segment,
  List,
  Image,
  Icon,
  Transition,
  Label,
  Dimmer,
  Message,
  Loader,
  Table,
  Header
} from "semantic-ui-react";
import { logo } from "../../assets";
import { renderMap } from "./utils/amcharts";
import { counter } from "./utils/counter";
import {
  generateCaseTrends,
  generateCasePerState,
  getUpdateTime,
  getStats,
  getNews,
  generateInfoTablePerState
} from "./utils/chartsjs";
// Actions
import { fetchPostsRequest, sortData } from "./actions";
// Selectors
import { dataSelector, loadingSelector } from "./selectors";
// Style
import "./index.css";

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
    const { fetchPostsRequest } = this.props;
    fetchPostsRequest();
    this.chart = renderMap("map-chart").polygonSeries;
  }

  componentWillUnmount() {
    // this.mapChart && this.mapChart.dispose();
  }

  handleSort = index => {
    const { sortData } = this.props;
    //sortData(index);
  };

  render() {
    const { t } = this.props;
    const { data, loading } = this.props;
    const { trend, options } = generateCaseTrends(t, data);
    const { total, increased, died } = getStats(data);
    const news = getNews(data);
    const tableData = generateInfoTablePerState(data);
    generateCasePerState(t, data, this.chart);
    return (
      <div style={{ paddingBottom: "15px" }}>
        <Grid columns={3} stackable>
          <Grid.Row stretched>
            <Grid.Column width={3}>
              <Segment className={"main-info-widget"} raised>
                <Dimmer active={loading}>
                  <Loader size="small">{t("common:loading")}</Loader>
                </Dimmer>
                <Label color="red" ribbon={"right"}>
                  <Icon name="treatment" />
                  {t("dashboard:overview")}
                </Label>
                <Statistic.Group className={"main-info-counter-group"}>
                  <Statistic horizontal size={"huge"}>
                    <Statistic.Value className={"main-info-counter-text-red"}>
                      <Image
                        src={logo}
                        className="circular inline"
                        style={{ paddingRight: "15px" }}
                      />
                      {total}
                    </Statistic.Value>
                    <Statistic.Label className={"main-info-counter-text"}>
                      {t("dashboard:total")}
                    </Statistic.Label>
                  </Statistic>
                </Statistic.Group>
                <br />
                <Statistic.Group
                  widths={2}
                  className={"main-info-counter-group"}
                >
                  <Statistic size={"mini"}>
                    <Statistic.Value className={"main-info-counter-text"}>
                      <Icon
                        disabled
                        name="caret up"
                        className={"main-info-counter-up"}
                      />
                      {increased}
                    </Statistic.Value>
                    <Statistic.Label className={"main-info-counter-text"}>
                      {t("dashboard:increased")}
                    </Statistic.Label>
                  </Statistic>
                  <Statistic size={"mini"}>
                    <Statistic.Value className={"main-info-counter-text"}>
                      <Icon
                        disabled
                        name="caret right"
                        className={"main-info-counter-ok"}
                      />
                      1
                    </Statistic.Value>
                    <Statistic.Label className={"main-info-counter-text"}>
                      {t("dashboard:recovered")}
                    </Statistic.Label>
                  </Statistic>
                  <Statistic size={"mini"}>
                    <Statistic.Value className={"main-info-counter-text"}>
                      <Icon
                        disabled
                        name="caret left"
                        className={"main-info-counter-increased"}
                      />
                      {died}
                    </Statistic.Value>
                    <Statistic.Label className={"main-info-counter-text"}>
                      {t("dashboard:dead")}
                    </Statistic.Label>
                  </Statistic>
                  <Statistic size={"mini"}>
                    <Statistic.Value className={"main-info-counter-text"}>
                      <Icon
                        disabled
                        name="caret up"
                        className={"main-info-counter-increased"}
                      />
                      -
                    </Statistic.Value>
                    <Statistic.Label className={"main-info-counter-text"}>
                      {t("dashboard:suspect")}
                    </Statistic.Label>
                  </Statistic>
                </Statistic.Group>

                <div className={"widget-meta-info"}>
                  <Icon disabled name="refresh" />{" "}
                  {t("dashboard:updatedAt") + " " + getUpdateTime(data)}
                </div>
              </Segment>

              <Message
                info
                icon="info"
                header={t("dashboard:infoWarningHead")}
                content={t("dashboard:infoWarningMsg")}
              />

              <Segment className={"main-info-widget"} raised>
                <Dimmer active={loading}>
                  <Loader size="small">{t("common:loading")}</Loader>
                </Dimmer>
                <div style={{ color: "#c4c7d0", fontWeight: "bold" }}>
                  {t("dashboard:newsTitle")}
                </div>
                <List divided relaxed className={"main-info-case-list"}>
                  {news.length ? (
                    _.map(news, info => (
                      <List.Item>
                        <List.Icon name="marker" />
                        <List.Content>
                          <List.Header>{info.place}</List.Header>
                          <List.Description
                            style={{
                              paddingTop: "5px",
                              textDecoration: "underline"
                            }}
                          >
                            <a href={info.link}>{info.message}</a>
                          </List.Description>
                        </List.Content>
                      </List.Item>
                    ))
                  ) : (
                    <div style={{ color: "#c4c7d0" }}>
                      {t("dashboard:noNews")}
                    </div>
                  )}
                </List>
                <div className={"widget-meta-info"}>
                  <Icon disabled name="refresh" />{" "}
                  {t("dashboard:updatedAt") + " " + getUpdateTime(data)}
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment className={"main-map-widget"} raised>
                <Dimmer active={loading}>
                  <Loader size="small">{t("common:loading")}</Loader>
                </Dimmer>
                <div style={{ color: "#c4c7d0", fontWeight: "bold" }}>
                  {t("dashboard:mapTitle")}
                </div>
                <div
                  id="map-chart"
                  style={{
                    width: "100%",
                    height: "100%",
                    paddingBottom: "30px"
                  }}
                />
                <div className={"widget-meta-info"}>
                  <Icon disabled name="refresh" />{" "}
                  {t("dashboard:updatedAt") + " " + getUpdateTime(data)}
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
              <Table
                className={"main-table-widget main-table-widget-color"}
                singleLine
                inverted
                compact
                unstackable
                celled
                striped
                sortable
              >
                <Table.Header className={"main-table-widget-color"}>
                  <Table.Row>
                    <Table.HeaderCell>{t("dashboard:Region")}</Table.HeaderCell>
                    <Table.HeaderCell>
                      {t("dashboard:regIncrease")}
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      {t("dashboard:regTotal")}
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {_.map(tableData, row => (
                    <Table.Row>
                      <Table.Cell>{row.name}</Table.Cell>
                      <Table.Cell>
                        {row.increase == 0 ? (
                          <Icon
                            size={"small"}
                            name="minus"
                            inverted
                            color={"green"}
                          />
                        ) : row.increase > 10 ? (
                          <>
                            {row.increase}
                            <Icon
                              size={"small"}
                              name="angle double up"
                              inverted
                              color={"red"}
                            />
                          </>
                        ) : (
                          <>
                            {row.increase}
                            <Icon
                              size={"small"}
                              name="angle up"
                              inverted
                              color={"yellow"}
                            />
                          </>
                        )}
                      </Table.Cell>
                      <Table.Cell>
                        {row.total == 0 ? (
                          <Icon
                            size={"small"}
                            name="smile"
                            inverted
                            color={"green"}
                          />
                        ) : row.total < 10 ? (
                          <>{row.total}</>
                        ) : (
                          <>
                            {row.total}
                            <Icon
                              size={"small"}
                              name="exclamation triangle"
                              inverted
                              color={"red"}
                            />
                          </>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan="3">
                      <div className={"main-table-widget-footer"}>
                        <Icon disabled name="refresh" />{" "}
                        {t("dashboard:updatedAt") + " " + getUpdateTime(data)}
                      </div>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
              <Segment className={"main-line-widget"} raised>
                <Dimmer active={loading}>
                  <Loader size="small">{t("common:loading")}</Loader>
                </Dimmer>
                <div style={{ color: "#c4c7d0", fontWeight: "bold" }}>
                  {t("dashboard:trendTitle")}
                </div>
                <div
                  id="line-chart"
                  style={{
                    width: "100%",
                    height: "100%",
                    paddingBottom: "30px"
                  }}
                >
                  <Line data={trend} options={options} />
                </div>
                <div className={"widget-meta-info"}>
                  <Icon disabled name="refresh" />{" "}
                  {t("dashboard:updatedAt") + " " + getUpdateTime(data)}
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
const mapStateToProps = state => ({
  data: dataSelector(state),
  loading: loadingSelector(state)
});

/**
 * mapDispatchToProps is a function provided to make use of the store's dispatch function,
 * usually by creating pre-bound versions of action creators that will automatically
 * dispatch their actions as soon as they are called.
 *
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => ({
  fetchPostsRequest: () => dispatch(fetchPostsRequest()),
  sortData: index => dispatch(sortData(index))
});

// Export Home container

export default compose(
  translate(["home"], { wait: true }),
  connect(mapStateToProps, mapDispatchToProps, null, { pure: false })
)(Home);

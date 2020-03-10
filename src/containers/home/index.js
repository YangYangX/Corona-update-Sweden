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
import { Pane, Text, Heading } from "evergreen-ui";
import { Statistic, Grid, Segment, List, Image,Icon,Transition,Label } from "semantic-ui-react";
import { logo } from "../../assets";
import { renderMap, renderRadarChart, renderLineChart } from "./utils/amcharts";
import { counter } from "./utils/counter";
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
    this.radarChart = renderRadarChart("radar-chart");
    this.mapChart = renderMap("map-chart");
    this.lineChart = renderLineChart("line-chart");
  }

  componentWillUnmount() {
    this.radarChart && this.radarChart.dispose();
    this.mapChart && this.mapChart.dispose();
    this.lineChart && this.lineChart.dispose();
  }

  render() {
    const { t } = this.props;

    return (
      <div>
        <Grid columns={3} stackable>
          <Grid.Row stretched >
            <Grid.Column width={3}>
              <Segment className={"main-info-widget"} raised>
                <Label color='red' ribbon={"right"} >
                  <Icon name="treatment" />{t("dashboard:overview")}
                </Label>
                <Statistic.Group className={"main-info-counter-group"}>
                  <Transition
                      animation={"pulse"}
                      duration={500}
                      visible={true}
                  >
                  <Statistic horizontal size={"huge"}>
                    <Statistic.Value className={"main-info-counter-text"}>
                      <Image src={logo} className="circular inline" />
                      355
                    </Statistic.Value>
                    <Statistic.Label className={"main-info-counter-text"}>{t("dashboard:total")}</Statistic.Label>
                  </Statistic>
                  </Transition>
                </Statistic.Group>
                <br/>
                <Statistic.Group widths={2} className={"main-info-counter-group"}>
                  <Statistic size={"small"}>
                    <Statistic.Value className={"main-info-counter-text"}>
                      <Icon disabled name='caret up' className={"main-info-counter-up"}/>
                      95
                    </Statistic.Value>
                    <Statistic.Label className={"main-info-counter-text"}>{t("dashboard:increased")}</Statistic.Label>
                  </Statistic>
                  <Statistic size={"small"}>
                    <Statistic.Value className={"main-info-counter-text"} >
                      <Icon disabled name='caret right' className={"main-info-counter-ok"}/>
                      1
                    </Statistic.Value>
                    <Statistic.Label className={"main-info-counter-text"}>{t("dashboard:recovered")}</Statistic.Label>
                  </Statistic>
                </Statistic.Group>

                <div className={"widget-meta-info"}><Icon disabled name='refresh' /> {t("dashboard:updatedAt")}  2020-03-11 00:03:00</div>
              </Segment>

              <Segment className={"main-info-widget"} raised>
                <List divided relaxed className={"main-info-case-list"}>
                  <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>
                      <List.Header>Stockholm</List.Header>
                      <List.Description>
                        <span className={"important-info"}>60</span> cases confirmed at 2020-03-10
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>
                      <List.Header>Västra Götaland</List.Header>
                      <List.Description>
                        15 cases confirmed at 2020-03-10
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>
                      <List.Header>Västernorrland</List.Header>
                      <List.Description>
                        6 cases confirmed at 2020-03-10
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="marker" />
                    <List.Content>
                      <List.Header>Halland</List.Header>
                      <List.Description>
                        4 cases confirmed at 2020-03-10
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
                <div className={"widget-meta-info"}><Icon disabled name='refresh' /> {t("dashboard:updatedAt")}  2020-03-11 00:03:00</div>
              </Segment>
            </Grid.Column>
            <Grid.Column width={8}>
              <Segment className={"main-map-widget"} raised>
                <div id="map-chart" style={{ width: "100%", height: "100%",paddingBottom:"20px" }} />
                <div className={"widget-meta-info"}><Icon disabled name='refresh' /> {t("dashboard:updatedAt")}  2020-03-11 00:03:00</div>
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
              <Segment className={"main-pie-widget"} raised>
                <div
                  id="radar-chart"
                  style={{ width: "100%", height: "100%",paddingBottom:"20px" }} />
                <div className={"widget-meta-info"}><Icon disabled name='refresh' /> {t("dashboard:updatedAt")}  2020-03-11 00:03:00</div>
              </Segment>
              <Segment className={"main-line-widget"} raised>
                <div
                  id="line-chart"
                  style={{ width: "100%", height: "100%",paddingBottom:"20px" }} />
                <div className={"widget-meta-info"}><Icon disabled name='refresh' /> {t("dashboard:updatedAt")}  2020-03-11 00:03:00</div>
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

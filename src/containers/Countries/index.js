/**
 *
 * Application container
 *
 * This uiComponent is the framework around the entire application, and should only
 * contain code that should be seem on all pages.(e.g. navigation bar, topbar and etc.)
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { Link } from "react-router-dom";
import _ from "lodash";
// UI framework
import {
  Header,
  Menu,
  Grid,
  Button,
  Image,
  List,
  Icon,
  Modal
} from "semantic-ui-react";
import { seIcon, zhIcon, nrIcon, dkIcon } from "../../assets";
// Style
import "./index.css";

// Class Framework, basic uiComponent for application
class Countries extends Component {
  /**
   * constructor function
   * @param {*} props
   */
  state = { showModal: false };

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const { navTo } = this.props;
    return (
      <div style={{ paddingBottom: "15px", height: "calc(100vh - 53px)" }}>
        <Modal size={"small"} open={this.state.showModal} basic>
          <Modal.Header>Data not ready</Modal.Header>
          <Modal.Content>
            <p>
              Not available for the moment, we are working hard to find good
              data sources.
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={() => {
                this.setState({ showModal: false });
              }}
              positive
              icon="checkmark"
              labelPosition="right"
              content="OK"
            />
          </Modal.Actions>
        </Modal>
        <Grid columns={1} stackable>
          <Grid.Row stretched>
            <Grid.Column width={16}>
              <List
                divided
                verticalAlign="middle"
                size="big"
                className={"main-countries-widget-color main-countries-widget"}
              >
                <List.Item
                  onClick={() => {
                    navTo("/se");
                  }}
                >
                  <List.Content floated="right">
                    <Button>
                      <Icon name="chevron right" />
                    </Button>
                  </List.Content>
                  <Image rounded src={seIcon} />
                  <List.Content>
                    Sweden [
                    <Icon
                      name="angle up"
                      className="countries-info-counter-up"
                    />
                    ]
                  </List.Content>
                </List.Item>

                <List.Item
                  onClick={() => {
                    navTo("/ch");
                  }}
                >
                  <List.Content floated="right">
                    <Button>
                      <Icon name="chevron right" />
                    </Button>
                  </List.Content>
                  <Image rounded src={zhIcon} />
                  <List.Content>
                    Switzerland [
                      <Icon
                      name="angle double up"
                      className="countries-info-counter-up"
                    />
                    ]
                  </List.Content>
                </List.Item>
                <List.Item
                  onClick={() => {
                    this.setState({ showModal: true });
                  }}
                >
                  <List.Content floated="right">
                    <Button>
                      <Icon name="chevron right" />
                    </Button>
                  </List.Content>
                  <Image rounded src={nrIcon} />
                  <List.Content>
                    Norway [
                    <Icon
                      name="minus"
                      className="countries-info-counter-unknown"
                    />
                    ]
                  </List.Content>
                </List.Item>
                <List.Item
                  onClick={() => {
                    this.setState({ showModal: true });
                  }}
                >
                  <List.Content floated="right">
                    <Button>
                      <Icon name="chevron right" />
                    </Button>
                  </List.Content>
                  <Image rounded src={dkIcon} />
                  <List.Content>
                    Danmark [
                    <Icon
                      name="minus"
                      className="countries-info-counter-unknown"
                    />
                    ]
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

// Default props
Countries.defaultProps = {};

// Prop attributes types
Countries.propTypes = {};

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
const mapDispatchToProps = dispatch => ({
  navTo: location => dispatch(push(location))
});

// Export Checkout container
export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(Countries);

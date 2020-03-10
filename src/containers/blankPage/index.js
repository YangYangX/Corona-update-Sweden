/**
 *
 * Application container
 *
 * This uiComponent is the framework around the entire application, and should only
 * contain code that should be seem on all pages.(e.g. navigation bar, topbar and etc.)
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { Link } from "react-router-dom";
import _ from "lodash";
// UI framework
import { Button } from 'evergreen-ui';

// Style
import './index.css';

// Class Framework, basic uiComponent for application
class BlankPage extends Component {

    /**
     * constructor function
     * @param {*} props
     */
    constructor(props) {
        super(props);
    }

    render() {
        const {navTo} = this.props;
        return (
            <div>
                <Button onClick={()=>{navTo("/")}}>返回Home页面</Button>
            </div>
        )
    }

}

// Default props
BlankPage.defaultProps = {
};

// Prop attributes types
BlankPage.propTypes = {
};

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
const mapDispatchToProps = (dispatch) => ({
    navTo: location => dispatch(push(location))
});

// Export Checkout container
export default connect(mapStateToProps, mapDispatchToProps,null,{pure: false})(BlankPage);

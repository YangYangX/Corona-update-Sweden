/**
 *
 * Application container
 *
 * This uiComponent is the framework around the entire application, and should only
 * contain code that should be seem on all pages.(e.g. navigation bar, topbar and etc.)
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { compose } from "redux";
import {connect} from 'react-redux';
import {translate} from "react-i18next";
// Import routes
import routes from '../../configure/routes';
import {Link} from "react-router-dom";
import {Icon} from 'evergreen-ui';
// Actions
import {changeLanguage} from './actions';

// Selectors
import {languageSelector} from './selectors';

// Style
import './index.css';
import {logo,giteeLogo,cnIcon,enIcon} from '../../assets';

// Class Framework, basic uiComponent for application
class Framework extends Component {

    /**
     * constructor function
     * @param {*} props
     */
    constructor(props) {
        super(props);
    }

    render() {

        const {changeLanguage,t} = this.props;
        const {language} = this.props;

        return (
            <div>
                <div className={"TopBar"}>
                    <img src={logo} className={"TopBar-logo"}/>
                    <nav className={"TopBar-nav"}>
                        {t("common:doc")}
                    </nav>
                    <div className={"TopBar-navRight"}>
                        {
                            "cn" == language ? <span style={{cursor: "pointer"}} onClick={()=>{changeLanguage("en")}} className="TopBar-link" > <img src={enIcon} height={24} style={{marginRight:"0.5rem"}}/>English</span>:null
                        }
                        {
                            "en" == language ? <span style={{cursor: "pointer"}} onClick={()=>{changeLanguage("cn")}} className="TopBar-link" > <img src={cnIcon} height={24} style={{marginRight:"0.5rem"}}/>简体中文</span>:null
                        }
                    </div>
                </div>
                <main style={{ backgroundColor: "#1c1e31",height: "calc(100vh - 56px)", width:"100vw"}}>
                    {routes}
                </main>
            </div>
        )
    }

}

// Default props
Framework.defaultProps = {};

// Prop attributes types
Framework.propTypes = {};

/**
 * mapStateToProps is a function provided to pull data from the store when it changes,
 * and pass those values as props to your uiComponent.
 *
 * @param {*} state
 */
const mapStateToProps = state => ({
    language: languageSelector(state)
});

/**
 * mapDispatchToProps is a function provided to make use of the store's dispatch function,
 * usually by creating pre-bound versions of action creators that will automatically
 * dispatch their actions as soon as they are called.
 *
 * @param {*} dispatch
 */
const mapDispatchToProps = (dispatch) => ({
    changeLanguage: language => dispatch(changeLanguage(language))
});

// Connect Switch to store to pass location down to each Routes.
// const ConnectedSwitch = connect(mapStateToProps)(Switch);

// Export Framework container
export default compose(
    translate(['common'], { wait: true }),
    connect(mapStateToProps, mapDispatchToProps, null, {pure: false}))(Framework);

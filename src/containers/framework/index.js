/**
 *
 * Application container
 *
 * This uiComponent is the framework around the entire application, and should only
 * contain code that should be seem on all pages.(e.g. navigation bar, topbar and etc.)
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import { translate } from "react-i18next";
// Import routes
import routes from "../../configure/routes";
import { Link } from "react-router-dom";
import { Menu, Button, Icon, Responsive, Visibility } from "semantic-ui-react";
// Actions
import { changeLanguage } from "./actions";

// Selectors
import { languageSelector } from "./selectors";

// Style
import "./index.css";
import { logo, giteeLogo, cnIcon, enIcon } from "../../assets";

const getWidth = () => {
    const isSSR = typeof window === 'undefined'
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
};

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
        const { changeLanguage, t } = this.props;
        const { language } = this.props;

        return (
            <div>


                <Menu stackable className={"toolbar"} inverted>
                    <Menu.Item>
                        <img src={logo} className={"TopBar-logo"} />
                        <span style={{paddingLeft:"10px"}}>{t("common:doc")}</span>
                    </Menu.Item>
                    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth} as={Menu.Menu} position='right'>
                        <Menu.Item onClick={()=>{}}>
                            <Icon name='help' /> {t("common:help")}
                        </Menu.Item>
                        <Menu.Item onClick={()=>{
                            changeLanguage("cn" == language ? "en": "cn")
                        }}>
                            {
                                "cn" == language ? <><img src={enIcon} style={{width:"48px",height:"48px"}} style={{marginRight:"0.5rem"}}/>English</>:null
                            }
                            {
                                "en" == language ? <><img src={cnIcon} style={{width:"48px",height:"48px"}} style={{marginRight:"0.5rem"}}/>简体中文</>:null
                            }

                        </Menu.Item>
                    </Responsive>
                </Menu>
                <main
                    style={{
                        backgroundColor: "#1c1e31",
                        width: "100vw"
                    }}
                >
                    {routes}
                </main>

            </div>
        );
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
const mapDispatchToProps = dispatch => ({
    changeLanguage: language => dispatch(changeLanguage(language))
});

// Connect Switch to store to pass location down to each Routes.
// const ConnectedSwitch = connect(mapStateToProps)(Switch);

// Export Framework container
export default compose(
    translate(["common"], { wait: true }),
    connect(mapStateToProps, mapDispatchToProps, null, { pure: false })
)(Framework);
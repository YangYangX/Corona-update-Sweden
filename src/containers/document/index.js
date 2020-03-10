/**
 *
 * home page
 *
 * This uiComponent is the home page not found page.
 */

import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {Link} from "react-router-dom";


// UI framework


// Style
import "./index.css";


// Class Home, basic uiComponent for application
class Document extends Component {
    /**
     * constructor function
     * @param {*} props
     */
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <div className={"MainLayout-content"}>
                    <section className={"MainLayout-contentRight"}>
                        <div className={"Container-nextToSidebar"} style={{marginBottom: "120px"}}>
                            <div className={"Content"}>
                                <h1>介绍</h1>
                                <p className="p">
                                    zkhoneycomb UI是蜂巢科技开发的一款基于React的UI Kit，用来快速构建风格统一的React程序。
                                    蜂巢科技的相关网络应用均应采用本UI套件为基础进行开发，本套件提供蜂巢网络应用的Seed项目，
                                    该项目提供一个包含了zkhoneycomb UI的HelloWorld程序，以及开发时必须的整个开发调试环境。
                                </p>
                                <h2>开发环境配置</h2>

                                开发环境需求：
                                <ul className={"ul"}>
                                    <li className={"li"}>
                                        git。https://git-scm.com/
                                    </li>
                                    <li className={"li"}>
                                        nodejs开发环境。https://nodejs.org
                                    </li>
                                    <li className={"li"}>
                                        yarn - 依赖管理程序。https://yarnpkg.com/zh-Hans/
                                    </li>
                                </ul>

                                <p>yarn start 命令执行成功后，程序自动打开浏览器并访问http://localhost:3000/，
                                    若出现helloWorld页面则环境配置成功。
                                </p>
                                <p>使用blankPage作为模版添加新的组件,其中：
                                    开发环境需求：
                                    <ul className={"ul"}>
                                        <li className={"li"}>
                                            actions - 为新的模块添加actions。
                                        </li>
                                        <li className={"li"}>
                                            reducers - 为新的模块添加reducer用来负责相关action对应的状态变化。
                                        </li>
                                        <li className={"li"}>
                                            selector - 为新的模块添加selector用来选取state tree中该模块相关的状态变量。
                                        </li>
                                        <li className={"li"}>
                                            saga - 添加对异步action的处理。
                                        </li>
                                        <li className={"li"}>
                                            effects - 负责异步action（i.e.: API请求）的逻辑。
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

// Default props
Document.defaultProps = {};

// Prop attributes types
Document.propTypes = {};

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
export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {pure: false}
)(Document);

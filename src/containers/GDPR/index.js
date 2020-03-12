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
import { Grid, Header } from "semantic-ui-react";
// Style
import "./index.css";

// Class Framework, basic uiComponent for application
class GDPRPage extends Component {
  /**
   * constructor function
   * @param {*} props
   */
  constructor(props) {
    super(props);
  }

  render() {
    const { navTo } = this.props;
    return (
      <div style={{ paddingBottom: "15px", color: "#c4c7d0"}}>
        <Grid columns={1} stackable>
          <Grid.Row stretched>
          </Grid.Row>
          <Grid.Row stretched>
              <Grid.Column width={16}>
                  <div style={{ fontSize: "18px", textAlign: "center" }}>
                      GDPR and Data protection
                  </div>
                  <h3>GDPR</h3>
                  <h4>data protection</h4>
                  <p>
                      We have written this data protection declaration (version
                      12.03.2020-311161512) in order to explain to you in accordance
                      with the requirements of the General{" "}
                      <a href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&tid=311161512">
                          Data Protection Regulation (EU) 2016/679
                      </a>{" "}
                      what information we collect, how we use data and what decision
                      options you have as a visitor to this website .
                  </p>
                  <p>
                      Unfortunately, it is in the nature of things that these
                      explanations sound very technical, but we have tried to describe
                      the most important things as simply and clearly as possible.
                  </p>
                  <h4>Google Analytics privacy policy</h4>
                  <p>
                      We use the analysis tracking tool Google Analytics (GA) from the
                      American company Google LLC (1600 Amphitheater Parkway Mountain
                      View, CA 94043, USA) on our website. Google Analytics collects
                      data about your actions on our website. If you click on a link,
                      for example, this action is saved in a cookie and sent to Google
                      Analytics. The reports we receive from Google Analytics allow us
                      to better tailor our website and service to your needs. In the
                      following we will go into more detail about the tracking tool
                      and, above all, inform you about which data is stored and how
                      you can prevent this.
                  </p>
                  <h4>What is Google Analytics?</h4>
                  <p>
                      Google Analytics is a tracking tool that is used to analyze the
                      traffic on our website. In order for Google Analytics to work, a
                      tracking code is built into the code of our website. When you
                      visit our website, this code records various actions you take on
                      our website. As soon as you leave our website, this data is sent
                      to the Google Analytics server and stored there.
                  </p>
                  <p>
                      Google processes the data and we get reports about your user
                      behavior. These can include the following reports:
                  </p>

                  <ul>
                      <li>
                          Target group reports: We get to know our users better through
                          target group reports and know more precisely who is interested
                          in our service.
                      </li>
                      <li>
                          Ad reports: Ad reports enable us to analyze and improve our
                          online advertising more easily.
                      </li>
                      <li>
                          Acquisition reports: Acquisition reports give us helpful
                          information about how we can get more people excited about our
                          service.
                      </li>
                      <li>
                          Behavior reports: Here we learn how you interact with our
                          website. We can understand which way you travel on our site
                          and which links you click.
                      </li>
                      <li>
                          Conversion reports: Conversion is a process in which you
                          perform a desired action based on a marketing message. For
                          example, if you change from a pure website visitor to a buyer
                          or newsletter subscriber. With the help of these reports, we
                          can learn more about how our marketing measures are received
                          by you. This is how we want to increase our conversion rate.
                      </li>
                      <li>
                          Real-time reports: Here we always find out immediately what is
                          happening on our website. For example, we see how many users
                          are currently reading this text.
                      </li>
                  </ul>
                  <h4>Why do we use Google Analytics on our website?</h4>
                  <p>
                      Our goal with this website is clear: we want to offer you the
                      best possible service. The statistics and data from Google
                      Analytics help us to achieve this goal.
                  </p>
                  <p>
                      The statistically evaluated data show us a clear picture of the
                      strengths and weaknesses of our website. On the one hand, we can
                      optimize our site so that it can be found more easily by
                      interested people on Google. On the other hand, the data help us
                      to better understand you as a visitor. We therefore know very
                      well what we need to improve on our website in order to offer
                      you the best possible service. The data also help us to carry
                      out our advertising and marketing measures more individually and
                      more cost-effectively. After all, it only makes sense to show
                      our products and services to people who are interested in them.
                  </p>
                  <h4>What data does Google Analytics store?</h4>
                  <p>
                      Google Analytics uses a tracking code to create a random, unique
                      ID that is linked to your browser cookie. This is how Google
                      Analytics recognizes you as a new user. The next time you visit
                      our site, you will be recognized as a "returning" user. All
                      collected data is saved together with this user ID. It is only
                      possible to evaluate pseudonymous user profiles in the first
                      place.
                  </p>
                  <p>
                      Labels such as cookies and app instance IDs measure your
                      interactions on our website. Interactions are all types of
                      actions that you perform on our website. If you also use other
                      Google systems (such as a Google account), data generated via
                      Google Analytics can be linked to third-party cookies. Google
                      does not pass on Google Analytics data unless we as the website
                      operator approve it. Exceptions may occur if it is required by
                      law.
                  </p>
                  <p>The following cookies are used by Google Analytics:</p>
                  <p>
                      <strong className="adsimple-311161512">Name:</strong> _ga <br />
                      <strong className="adsimple-311161512">Value:</strong>
                      2.1326744211.152311161512-5 Intended <br />
                      <strong className="adsimple-311161512">use:</strong> By default,
                      analytics.js uses the _ga cookie to save the user ID. Basically,
                      it serves to differentiate between website visitors.
                      <br />
                      <strong className="adsimple-311161512">Expiry date:</strong>
                      &nbsp;after 2 years
                  </p>
                  <p>
                      Note: This list cannot claim to be complete, since Google keeps
                      changing the choice of its cookies.
                  </p>
                  <p>
                      Here we show you an overview of the most important data that is
                      collected with Google Analytics:
                  </p>
                  <p>
                      Heatmaps: Google creates so-called heatmaps. Heatmaps show
                      exactly those areas that you click on. This is how we get
                      information about where you are on our site.
                  </p>
                  <p>
                      Session duration: Google refers to the time you spend on our
                      website without leaving the website. If you have been inactive
                      for 20 minutes, the session ends automatically.
                  </p>
                  <p>
                      Bounce rate: A bounce is said if you only view one page on our
                      website and then leave our website.
                  </p>
                  <p>
                      Account creation : If you create an account or place an order on
                      our website, Google Analytics collects this data.
                  </p>
                  <p>
                      IP address: The IP address is only shown in abbreviated form so
                      that no clear assignment is possible.
                  </p>
                  <p>
                      Location: The country and your approximate location can be
                      determined via the IP address. This process is also known as IP
                      location determination.
                  </p>
                  <p>
                      Technical information: The technical information includes, among
                      other things, your browser type, your Internet provider or your
                      screen resolution.
                  </p>
                  <p>
                      Source of origin: Google Analytics or us are of course also
                      interested in which website or which advertising you came to our
                      site.
                  </p>
                  <p>
                      Other data include contact details, any ratings, playing media
                      (e.g. if you play a video on our site), sharing content via
                      social media or adding to your favorites. The list has no claim
                      to completeness and is only used for a general orientation of
                      data storage by Google Analytics.
                  </p>
                  <h4>How long and where is the data stored?</h4>
                  <p>
                      Google has spread your servers around the world. Most of the
                      servers are located in America and therefore your data is
                      usually stored on American servers. Here you can read exactly
                      where the Google data centers are located:
                      <a href=" https://www.google.com/about/datacenters/inside/locations/?hl=se">
                          {" "}
                          https://www.google.com/about/d<br/>atacenters/inside/locations/?hl=se
                      </a>
                  </p>
                  <p>
                      Your data is distributed on various physical data carriers. This
                      has the advantage that the data can be called up more quickly
                      and is better protected against manipulation. Every Google data
                      center has appropriate emergency programs for your data. If, for
                      example, the hardware at Google fails or natural disasters
                      paralyze servers, the risk of a service interruption at Google
                      remains low.
                  </p>
                  <p>
                      Google Analytics has a standard retention period of 26 months
                      for your user data. Then your user data will be deleted.
                      However, we have the option of choosing the retention period for
                      user data. We have five options:
                  </p>
                  <p>
                      <ul>
                          <li>Deletion after 14 months</li>
                          <li>Deletion after 26 months</li>
                          <li>Deletion after 38 months</li>
                          <li>Deletion after 50 months</li>
                          <li>No automatic deletion</li>
                      </ul>
                  </p>
                  <p>
                      When the specified period has expired, the data is deleted once
                      a month. This retention period applies to your data, which are
                      linked to cookies, user identification and advertising IDs (e.g.
                      cookies from the DoubleClick domain). Report results are based
                      on aggregated data and are saved independently of user data.
                      Aggregated data is a combination of individual data into a
                      larger unit.
                  </p>
                  <h4>How can I delete my data or prevent data storage?</h4>
                  <p>
                      According to data protection law of the European Union, you have
                      the right to receive information about your data, to update it,
                      to delete it or to restrict it. You can prevent Google Analytics
                      from using your data by using the browser add-on to deactivate
                      Google Analytics JavaScript (ga.js, analytics.js, dc.js). You
                      can download and install the browser add-on from{" "}
                      <a href={"https://tools.google.com/dlpage"}>
                          https://tools.google.com/dlpage
                      </a>{" "}
                      . Please note that this add-on only disables data collection by
                      Google Analytics.
                  </p>
                  <p>
                      If you want to deactivate, delete or manage cookies (regardless
                      of Google Analytics), there is a separate instruction for each
                      browser:
                  </p>
                  <p>
                      <ul>
                          <li>
                              <a
                                  href={
                                      "https://support.google.com/chrome/answer/95647?tid=311161512"
                                  }
                              >
                                  Chrome: delete, activate and manage cookies in Chrome
                              </a>
                          </li>
                          <li>
                              <a
                                  href={
                                      "https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=311161512"
                                  }
                              >
                                  Safari: Manage cookies and website data with Safari
                              </a>
                          </li>
                          <li>
                              <a
                                  href={
                                      "https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=311161512"
                                  }
                              >
                                  Firefox: Delete cookies to remove data that websites have
                                  stored on your computer
                              </a>
                          </li>
                          <li>
                              <a
                                  href={
                                      "https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=311161512"
                                  }
                              >
                                  Internet Explorer: delete and manage cookies
                              </a>
                          </li>
                          <li>
                              <a
                                  href={
                                      "https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=311161512"
                                  }
                              >
                                  Microsoft Edge: delete and manage cookies
                              </a>
                          </li>
                      </ul>
                  </p>
                  <p>
                      Google Analytics is an active participant in the EU-US Privacy
                      Shield Framework, which regulates the correct and secure data
                      transfer of personal data. More information can be found at
                      <a
                          href={
                              "https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&tid=311161512"
                          }
                      >
                          https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&tid=311161512
                      </a>
                      . We hope we were able to provide you with the most important
                      information about data processing from Google Analytics. If you
                      want to learn more about the tracking service, we recommend
                      these two links: http://www.google.com/analytics/terms/de.html
                      and{" "}
                      <a
                          href={
                              "https://support.google.com/analytics/answer/6004245 ? hl =de"
                          }
                      >
                          https://support.google.com/analyt<br/>ics/answer/6004245 ? hl = de
                      </a>{" "}
                      .
                  </p>
                  <h4>Google Analytics IP anonymization</h4>
                  <p>
                      We have activated the functions for advertising reports in
                      Google Analytics. Demographics and interests reports include
                      age, gender, and interests. This enables us to get a better
                      picture of our users - without being able to assign this data to
                      individual people. You can find out more about the advertising
                      functions at
                      <a
                          href={
                              " https://support.google.com/analytics/answe<br/>r/3450482?hl=de_AT&utm_id=ad"
                          }
                      >
                          {" "}
                          https://support.google.com/analytic<br/>s/answer/3450482?hl=de_AT&utm_id=ad
                      </a>
                      .
                  </p>
                  <p>
                      You can stop using the activities and information of your Google
                      account under “Settings for advertising” on
                      <a href={"https://adssettings.google.com/authenticated"}>
                          https://adssettings.google.com/authenticated
                      </a>{" "}
                      using the checkbox.
                  </p>
                  <h4>Google Analytics deactivation link</h4>
                  <p>
                      We have concluded a direct customer contract for the use of
                      Google Analytics with Google by accepting the “Addition to data
                      processing” in Google Analytics.
                  </p>
                  <p>
                      More about the add-on for data processing for Google Analytics
                      can be found here:{" "}
                      <a
                          href={
                              "https://support.google.com/analytics/answer/3379636?hl=de&utm_id=ad"
                          }
                      >
                          https://support.google.com/analytics/<br/>answer/3379636?hl=de&utm_id=ad
                      </a>
                  </p>
                  <h4>Google Analytics Google Signals privacy policy</h4>
                  <p>
                      We have activated the Google signals in Google Analytics. The
                      existing Google Analytics functions (advertising reports,
                      remarketing, cross-device reports and reports on interests and
                      demographic characteristics) are updated in order to receive
                      summarized and anonymized data from you, provided that you have
                      allowed personalized ads in your Google account.
                  </p>
                  <p>
                      The special thing about it is that it is a cross-device
                      tracking. This means that your data can be analyzed across
                      devices. By activating Google signals, data is collected and
                      linked to the Google account. For example, Google can recognize
                      when you view a product on our website using a smartphone and
                      only later buy the product using a laptop. Thanks to the
                      activation of Google signals, we can start cross-device
                      remarketing campaigns that would otherwise not be possible in
                      this form. Remarketing means that we can also show you our offer
                      on other websites.
                  </p>
                  <p>
                      In Google Analytics, further visitor data such as location,
                      search history, YouTube history and data about your actions on
                      our website are recorded by the Google signals. This will give
                      Google better advertising reports and more useful information
                      about your interests and demographics. This includes your age,
                      which language you speak, where you live or which gender you
                      belong to. In addition, there are also social criteria such as
                      your job, your marital status or your income. All of these
                      features help Google Analytics to define groups of people or
                      target groups.
                  </p>
                  <p>
                      The reports also help us to better assess your behavior, your
                      wishes and interests. This enables us to optimize and adapt our
                      services and products for you. By default, this data expires
                      after 26 months. Please note that this data collection only
                      takes place if you have allowed personalized advertising in your
                      Google account. It is always summarized and anonymous data and
                      never individual data. You can manage or delete this data in
                      your Google account.
                  </p>
                  <p>
                      Source: Created with the data protection generator from AdSimple
                      in cooperation with{" "}
                      <a href={"https://www.justmed.de/"}>justmed.de</a>
                  </p>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

// Default props
GDPRPage.defaultProps = {};

// Prop attributes types
GDPRPage.propTypes = {};

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
})(GDPRPage);

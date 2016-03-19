import React, { Component } from 'react';
import styles from './index.styl';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default class Header extends Component {
  static propTypes = {
    websiteUrl: React.PropTypes.string,
    dashboardUrl: React.PropTypes.string,
    loginButtonText: React.PropTypes.string,
    onClickLoginButton: React.PropTypes.func,
    basic: React.PropTypes.bool,
    dark: React.PropTypes.bool,
    fixed: React.PropTypes.bool,
    fixedTop: React.PropTypes.bool
  };

  static defaultProps = {
    websiteUrl: 'https://auth0.com',
    dashboardUrl: 'https://manage.auth0.com',
    loginButtonText: 'Login',
    onClickLoginButton: () => {},
    basic: false,
    dark: false,
    fixed: false,
    fixedTop: false
  };

  constructor(props) {
    super(props);

    this.menuDropdownHandler = ::this.menuDropdownHandler;
    this.menuItemsDropdownHandler = ::this.menuItemsDropdownHandler;
  }

  state = {
    menuDropdown: false,
    menuItemsDropdown: false
  };

  menuDropdownHandler() {
    this.setState({
      menuDropdown: !this.state.menuDropdown
    });
  }

  menuItemsDropdownHandler() {
    this.setState({
      menuItemsDropdown: !this.state.menuItemsDropdown
    });
  }

  isDefaultLoginText() {
    return this.props.loginButtonText === Header.defaultProps.loginButtonText;
  }

  render() {
    return (
      <header className={cx('header', {
        'header--basic': this.props.basic,
        'header--dark': this.props.dark,
        'header--fixed': this.props.fixed,
        'header--fixed-top': this.props.fixedTop,
      })}
      >
        <nav role="navigation" className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={this.state.menuDropdown}
                className="navbar-toggle collapsed"
                onClick={this.menuDropdownHandler}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className={cx('icon-bar')} />
                <span className={cx('icon-bar')} />
                <span className={cx('icon-bar')} />
              </button>
              <h1 className="navbar-brand">
                <a href="/">
                  <span>Auth0</span>
                </a>
              </h1>
              <a
                href={`${this.props.websiteUrl}/jobs`}
                className={
                  `${cx('no-basic', 'hiring')} animated bounce hidden-sm hidden-xs hidden-md`
                }
              >
                We&apos;re hiring!
              </a>
            </div>
            <div id="navbar-collapse" className={`${cx({
              collapse: !this.state.menuDropdown,
              in: this.state.menuDropdown
            })} navbar-collapse`}
            >
              <ul className={`${cx('no-basic')} nav navbar-nav navbar-left`}>
                <li className="li-why">
                  <a href={`${this.props.websiteUrl}/why-auth0`}>Why Auth0</a>
                </li>
                <li className="li-how">
                  <a href={`${this.props.websiteUrl}/how-it-works`}>How It Works</a>
                </li>
                <li className="li-pricing">
                  <a href={`${this.props.websiteUrl}/pricing`}>Pricing</a>
                </li>
                <li className={`${cx({ open: this.state.menuItemsDropdown })} dropdown`}>
                  <span
                    role="button"
                    aria-haspopup="true"
                    aria-expanded={this.state.menuItemsDropdown}
                    className={cx('btn-dro')}
                    onClick={this.menuItemsDropdownHandler}
                  >
                    More<i className="icon-budicon-460" />
                  </span>
                  <ul
                    role="menu"
                    className="dropdown-menu"
                  >
                    <li>
                      <a href={`${this.props.websiteUrl}/lock`}>Lock</a>
                    </li>
                    <li>
                      <a href={`${this.props.websiteUrl}/passwordless`}>Passwordless</a>
                    </li>
                    <li>
                      <a href={`${this.props.websiteUrl}/wordpress`}>WordPress</a>
                    </li>
                    <li role="separator" className="divider" />
                    <li>
                      <a href={`${this.props.websiteUrl}/about`}>About</a>
                    </li>
                    <li>
                      <a href={`${this.props.websiteUrl}/blog`}>Blog</a>
                    </li>
                    <li>
                      <a href={`${this.props.websiteUrl}/customers`}>Customers</a>
                    </li>
                    <li>
                      <a href={`${this.props.websiteUrl}/resources`}>Resources</a>
                    </li>
                    <li>
                      <a href={`${this.props.websiteUrl}/video-tutorials`}>Video Tutorials</a>
                    </li>
                    <li>
                      <a href={`${this.props.websiteUrl}/partners`}>Partners</a>
                    </li>
                    <li>
                      <a href={`${this.props.websiteUrl}/opensource`}>Open Source</a>
                    </li>
                    <li>
                      <a href={`${this.props.websiteUrl}/jobs`}>Jobs</a>
                    </li>
                    <li>
                      <a href={`${this.props.websiteUrl}/press`}>Press</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className={cx('li-docs', 'no-basic')}>
                  <a href={`${this.props.websiteUrl}/support`}>Help &amp; Support</a>
                </li>
                <li className={cx('li-docs', 'no-basic')}>
                  <a href={`${this.props.websiteUrl}/docs`}>Documentation</a>
                </li>
                <li>
                  <a
                    href={this.isDefaultLoginText() ? '#' : this.props.dashboardUrl}
                    onClick={this.props.onClickLoginButton}
                    className={cx('signin-button', 'login')}
                  >
                    {this.props.loginButtonText}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

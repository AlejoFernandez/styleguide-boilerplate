import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styles from './WebHeader.styl';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class WebHeader extends Component {
  static propTypes = {
    websiteURL: React.PropTypes.string,
    dashboardURL: React.PropTypes.string,
    loginButtonText: React.PropTypes.string,
    onClickLoginButton: React.PropTypes.func,
    basic: React.PropTypes.bool,
    dark: React.PropTypes.bool,
    fixed: React.PropTypes.bool,
    fixedTop: React.PropTypes.bool,
    promoteLink: React.PropTypes.bool,
    promoteLinkURL: React.PropTypes.string,
    promoteLinkText: React.PropTypes.string
  };

  static defaultProps = {
    websiteURL: 'https://auth0.com',
    dashboardURL: 'https://manage.auth0.com',
    loginButtonText: 'Login',
    onClickLoginButton: () => {},
    basic: false,
    dark: false,
    fixed: false,
    fixedTop: false,
    promoteLink: true,
    promoteLinkURL: 'https://auth0.com/jobs',
    promoteLinkText: 'We\'re hiring!'
  };

  constructor(props) {
    super(props);

    this.navbarDropdownButtonID = 'web-header-navbar-button';
    this.navbarDropdownGroupID = 'web-header-navbar-group';
    this.moreDropdownButtonID = 'web-header-more-button';
    this.moreDropdownGroupID = 'web-header-more-group';

    this.navbarDropdownHandler = ::this.navbarDropdownHandler;
    this.moreDropdownHandler = ::this.moreDropdownHandler;
    this.handleResize = ::this.handleResize;
    this.handleDocumentClick = ::this.handleDocumentClick;
  }

  // Set default dropdowns states for mobile (mobile-first)
  state = {
    navbarDropdownActive: true,
    navbarDropdownIsOpen: false,
    moreDropdownActive: false,
    moreDropdownIsOpen: false
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);

    document.addEventListener('click', this.handleDocumentClick);
    document.addEventListener('touchend', this.handleDocumentClick);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('touchend', this.handleDocumentClick);
  }

  getTabindex(dropdown) {
    if (dropdown === 'navbar') {
      return this.state.navbarDropdownIsOpen ? '0' : '-1';
    }

    return this.state.moreDropdownIsOpen ? '0' : '-1';
  }

  handleResize() {
    if (window.innerWidth > 992) {
      this.setState({ navbarDropdownActive: false, moreDropdownActive: true });
    } else {
      this.setState({ navbarDropdownActive: true, moreDropdownActive: false });
    }
  }

  handleDocumentClick(event) {
    if (!findDOMNode(this.refs.menuDropdown).contains(event.target)) {
      this.setState({ navbarDropdownIsOpen: false });
    }
    if (!findDOMNode(this.refs.menuItemsDropdown).contains(event.target)) {
      this.setState({ moreDropdownIsOpen: false });
    }
  }

  navbarDropdownHandler() {
    this.setState({ navbarDropdownIsOpen: !this.state.navbarDropdownIsOpen });
  }

  moreDropdownHandler() {
    this.setState({ moreDropdownIsOpen: !this.state.moreDropdownIsOpen });
  }

  isDefaultLoginText() {
    return this.props.loginButtonText === WebHeader.defaultProps.loginButtonText;
  }

  render() {
    return (
      <header
        className={cx('header', {
          'header--basic': this.props.basic,
          'header--dark': this.props.dark,
          'header--fixed': this.props.fixed,
          'header--fixed-top': this.props.fixedTop,
        })}
        role="banner"
      >
        <nav role="navigation" className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header" ref="menuDropdown">
              <button
                type="button"
                id={this.navbarDropdownButtonID}
                aria-hidden={!this.state.navbarDropdownActive}
                aria-haspopup={this.state.navbarDropdownActive ? true : null}
                aria-owns={this.state.navbarDropdownActive ? this.navbarDropdownGroupID : null}
                aria-controls={this.state.navbarDropdownActive ? this.navbarDropdownGroupID : null}
                aria-expanded={
                  this.state.navbarDropdownActive ? this.state.navbarDropdownIsOpen : null
                }
                className="navbar-toggle collapsed"
                onClick={this.navbarDropdownHandler}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className={cx('icon-bar')} />
                <span className={cx('icon-bar')} />
                <span className={cx('icon-bar')} />
              </button>
              <h1 className="navbar-brand">
                <a href="/" rel="home">
                  <span>Auth0</span>
                </a>
              </h1>
              {this.props.promoteLink ?
              <a
                href={this.props.promoteLinkURL}
                className={
                  `${cx('no-basic', 'hiring')} animated bounce hidden-sm hidden-xs hidden-md`
                }
              >{this.props.promoteLinkText}</a> :
              null}
            </div>
            <div
              id={this.navbarDropdownGroupID}
              role={this.state.navbarDropdownActive ? 'group' : null}
              aria-expanded={
                this.state.navbarDropdownActive ?
                  this.state.navbarDropdownIsOpen :
                  null
              }
              aria-labelledby={this.state.navbarDropdownActive ? this.navbarDropdownButtonID : null}
              className={`${cx({
                collapse: !this.state.navbarDropdownIsOpen,
                in: this.state.navbarDropdownIsOpen
              })} navbar-collapse`}
            >
              <ul className={`${cx('no-basic')} nav navbar-nav navbar-left`}>
                <li className="li-why">
                  <a
                    href={`${this.props.websiteURL}/why-auth0`}
                    tabIndex={this.state.navbarDropdownActive ? this.getTabindex('navbar') : null}
                  >Why Auth0</a>
                </li>
                <li className="li-how">
                  <a
                    href={`${this.props.websiteURL}/how-it-works`}
                    tabIndex={this.state.navbarDropdownActive ? this.getTabindex('navbar') : null}
                  >How It Works</a>
                </li>
                <li className="li-pricing">
                  <a
                    href={`${this.props.websiteURL}/pricing`}
                    tabIndex={this.state.navbarDropdownActive ? this.getTabindex('navbar') : null}
                  >Pricing</a>
                </li>
                <li
                  className={`${cx({ open: this.state.moreDropdownIsOpen })} dropdown`}
                  ref="menuItemsDropdown"
                >
                  <button
                    id={this.moreDropdownButtonID}
                    aria-hidden={!this.state.moreDropdownActive}
                    aria-haspopup={this.state.moreDropdownActive ? true : null}
                    aria-owns={this.state.moreDropdownActive ? this.moreDropdownGroupID : null}
                    aria-controls={this.state.moreDropdownActive ? this.moreDropdownGroupID : null}
                    aria-expanded={
                      this.state.moreDropdownActive ? this.state.moreDropdownIsOpen : null
                    }
                    className={cx('btn-dro')}
                    onClick={this.moreDropdownHandler}
                  >
                    More<i className="icon-budicon-460" />
                  </button>
                  <ul
                    id={this.moreDropdownGroupID}
                    role={this.state.moreDropdownActive ? 'group' : null}
                    aria-expanded={
                      this.state.moreDropdownActive ?
                        this.state.moreDropdownIsOpen :
                        null
                    }
                    aria-labelledby={
                      this.state.moreDropdownActive ? this.moreDropdownButtonID : null
                    }
                    className="dropdown-menu"
                  >
                    <li>
                      <a
                        href={`${this.props.websiteURL}/lock`}
                        tabIndex={this.state.moreDropdownActive ? this.getTabindex('more') : null}
                      >Lock</a>
                    </li>
                    <li>
                      <a
                        href={`${this.props.websiteURL}/passwordless`}
                        tabIndex={this.state.moreDropdownActive ? this.getTabindex('more') : null}
                      >Passwordless</a>
                    </li>
                    <li>
                      <a
                        href={`${this.props.websiteURL}/wordpress`}
                        tabIndex={this.state.moreDropdownActive ? this.getTabindex('more') : null}
                      >WordPress</a>
                    </li>
                    <li role="separator" className="divider" />
                    <li>
                      <a
                        href={`${this.props.websiteURL}/about`}
                        tabIndex={this.state.moreDropdownActive ? this.getTabindex('more') : null}
                      >About</a>
                    </li>
                    <li>
                      <a
                        href={`${this.props.websiteURL}/blog`}
                        tabIndex={this.state.moreDropdownActive ? this.getTabindex('more') : null}
                      >Blog</a>
                    </li>
                    <li>
                      <a
                        href={`${this.props.websiteURL}/customers`}
                        tabIndex={this.state.moreDropdownActive ? this.getTabindex('more') : null}
                      >Customers</a>
                    </li>
                    <li>
                      <a
                        href={`${this.props.websiteURL}/resources`}
                        tabIndex={this.state.moreDropdownActive ? this.getTabindex('more') : null}
                      >Resources</a>
                    </li>
                    <li>
                      <a
                        href={`${this.props.websiteURL}/video-tutorials`}
                        tabIndex={this.state.moreDropdownActive ? this.getTabindex('more') : null}
                      >Video Tutorials</a>
                    </li>
                    <li>
                      <a
                        href={`${this.props.websiteURL}/partners`}
                        tabIndex={this.state.moreDropdownActive ? this.getTabindex('more') : null}
                      >Partners</a>
                    </li>
                    <li>
                      <a
                        href={`${this.props.websiteURL}/opensource`}
                        tabIndex={this.state.moreDropdownActive ? this.getTabindex('more') : null}
                      >Open Source</a>
                    </li>
                    <li>
                      <a
                        href={`${this.props.websiteURL}/jobs`}
                        tabIndex={this.state.moreDropdownActive ? this.getTabindex('more') : null}
                      >Jobs</a>
                    </li>
                    <li>
                      <a
                        href={`${this.props.websiteURL}/press`}
                        tabIndex={this.state.moreDropdownActive ? this.getTabindex('more') : null}
                      >Press</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li className={cx('li-docs', 'no-basic')}>
                  <a
                    href={`${this.props.websiteURL}/support`}
                    tabIndex={this.state.navbarDropdownActive ? this.getTabindex('navbar') : null}
                  >Help &amp; Support</a>
                </li>
                <li className={cx('li-docs', 'no-basic')}>
                  <a
                    href={`${this.props.websiteURL}/docs`}
                    tabIndex={this.state.navbarDropdownActive ? this.getTabindex('navbar') : null}
                  >Documentation</a>
                </li>
                <li>
                  <a
                    className={cx('signin-button', 'login')}
                    href={this.isDefaultLoginText() ? '#' : this.props.dashboardURL}
                    onClick={this.props.onClickLoginButton}
                    tabIndex={this.state.navbarDropdownActive ? this.getTabindex('navbar') : null}
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

export default WebHeader;

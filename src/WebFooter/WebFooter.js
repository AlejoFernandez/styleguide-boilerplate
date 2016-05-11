import React, { Component } from 'react';
import styles from './WebFooter.styl';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class WebFooter extends Component {
  static propTypes = {
    dark: React.PropTypes.bool
  };

  static defaultProps = {
    dark: false
  };

  render() {
    return (
    <footer className={cx('footer', { 'footer--dark': this.props.dark })}>
      <div className="container">
        <div className={cx('footer__logo')}>
          <img
            src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.png"
            alt=""
            role="presentation"
            width="30"
          />
        </div>
        <div className={cx('footer__grid')}>
          <div className={cx('footer__column')}>
            <div className={cx('footer__item')}>
              <h6 className={cx('footer__title')}>Product</h6>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/pricing">Pricing</a>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/why-auth0">Why Auth0</a>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/how-it-works">How It Works</a>
            </div>
          </div>
          <div className={cx('footer__column')}>
            <div className={cx('footer__item')}>
              <h6 className={cx('footer__title')}>Company</h6>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/about">About Us</a>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/blog">Blog</a>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/jobs">Jobs</a>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/press">Press</a>
            </div>
          </div>
          <div className={cx('footer__column')}>
            <div className={cx('footer__item')}>
              <h6 className={cx('footer__title')}>Security</h6>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/availability-trust">Availability &amp; Trust</a>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/security">Security</a>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/whitehat">White Hat</a>
            </div>
          </div>
          <div className={cx('footer__column')}>
            <div className={cx('footer__item')}>
              <h6 className={cx('footer__title')}>Learn</h6>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/support">Help &amp; Support</a>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/docs">Documentation</a>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/opensource">Open Source</a>
            </div>
          </div>
          <div className={cx('footer__column')}>
            <div className={cx('footer__item')}>
              <h6 className={cx('footer__title')}>Extend</h6>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/lock">Lock</a>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/wordpress">WordPress</a>
            </div>
            <div className={cx('footer__item')}>
              <a href="https://auth0.com/docs/apiv2">API Explorer</a>
            </div>
          </div>
          <div className={cx('footer__contact')}>
            <div className={cx('footer__column')}>
              <div className={cx('footer__item')}>
                <h6 className={cx('footer__title')}>Contact</h6>
              </div>
              <div className={cx('footer__item', 'footer__item--text')}>
                10777 Main Street <br />Suite 204 <br />Bellevue, WA 98004
              </div>
            </div>
            <div className={cx('footer__column', 'footer__column--no-heading')}>
              <div className={cx('footer__item', 'footer__item--label')}>Sales</div>
              <div className={cx('footer__item')}>
                <a href="tel:+18882352699">+1 (888) 235-2699</a>
                <a href="tel:+14253126521">+1 (425) 312-6521</a>
              </div>
              <div className={cx('footer__item', 'footer__item--label')}>Support</div>
              <div className={cx('footer__item')}>
                <a href="tel:+14255599554">+1 (425) 559-9554</a>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('footer-colophon')}>
          <div className={cx('footer__column')}>
            <div className={cx('social')}>
              <div className={cx('social__item')}>
                <iframe
                  allowTransparency="true"
                  frameBorder={0}
                  scrolling="no"
                  src="//platform.twitter.com/widgets/follow_button.html?screen_name=auth0"
                  className="twitter"
                />
              </div>
              <div className={cx('social__item')}>
                <iframe
                  src={'//www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fge' +
                    'tauth0&width&layout=button_count&action=like&show_faces=false&show_count=fa' +
                    'lse&share=false&height=21&appId=507756515938786'}
                  scrolling="no"
                  frameBorder={0}
                  allowTransparency="true"
                  className="facebook"
                />
              </div>
            </div>
          </div>
          <div className={cx('footer__column')}>
            <ul className={`${cx('footer-colophon__list')} list-inline text-right`}>
              <li className={cx('footer-colophon__item')}>
                <a href="https://auth0.com/privacy">Privacy Policy</a>
              </li>
              <li className={cx('footer-colophon__item')}>
                <a href="https://auth0.com/terms">Terms of Service</a>
              </li>
              <li className={cx('footer-colophon__item')}>
                <span>© 2013-{new Date().getFullYear()} Auth0® Inc. All Rights Reserved.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>);
  }

  getExample(){
    return ("<WebFooter />");
  }
}

export default WebFooter;

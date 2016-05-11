import React, {Component} from 'react';
import styles from '../index.styl';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default React.createClass({
  render: function() {
    return (

      <div role="complementary" className={cx("aside-styleguide")}>
        <header className={cx("header")}>
          <h1><a href="/" title="Go to Auth0!"><img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" alt="Auth0 badge" width={30} height /></a></h1>
          <button data-toggle="collapse" data-target="#menu" className={cx("navbar-toggle collapsed")} aria-expanded="false"><span className={cx("sr-only")}>Toggle navigation</span><span className={cx("icon-bar")} /><span className={cx("icon-bar")} /><span className={cx("icon-bar")} /></button>
        </header>
        <div id="menu" className={cx("collapse")} aria-expanded="false">
          <nav className={cx("nav-styleguide")}>
            <ul data-accordion-group="data-accordion-group"><li data-accordion className="active open"><a className="is-current" href="#splash" data-control><span className="icon icon-budicon-22" />splash</a></li><li data-accordion className><a className href="#getting-started" data-control><span className="icon icon-budicon-464" />Getting Started</a><ul className="nav" data-content style={{maxHeight: 0, overflow: 'hidden'}}><li><a href="#from-cdn" data-control>From CDN</a></li><li><a href="#from-gh" data-control>Installing from Github</a></li></ul></li><li data-accordion className><a className href="#design" data-control><span className="icon icon-budicon-258" />Design</a><ul className="nav" data-content style={{maxHeight: 0, overflow: 'hidden'}}><li><a href="#typography" data-control>Typography</a></li><li><a href="#primary-colors" data-control>Primary Colors</a></li><li><a href="#secondary-colors" data-control>Secondary Colors</a></li><li><a href="#bg-colors" data-control>Background Colors</a></li><li><a href="#bg-colors-status" data-control>Status Colors      </a></li><li><a href="#color-hues" data-control>Color hues</a></li></ul></li><li data-accordion className><a className href="#components" data-control><span className="icon icon-budicon-690" />Components</a><ul className="nav" data-content style={{maxHeight: 0, overflow: 'hidden'}}><li><a href="#alert" data-control>Alert</a></li><li><a href="#buttons" data-control>Buttons</a></li><li><a href="#try-banner" data-control>Try Banner</a></li><li><a href="#jumbotron" data-control>Jumbotron</a></li><li><a href="#header" data-control>Header</a></li><li><a href="#footer" data-control>Footer</a></li><li><a href="#modals" data-control>Modals</a></li><li><a href="#tables" data-control>Tables</a></li><li><a href="#navs" data-control>Navs</a></li><li><a href="#tabs" data-control>Showcase tabs</a></li><li><a href="#spinner" data-control>Spinner</a></li><li><a href="#code-picker" data-control>Code picker</a></li><li><a href="#ui-switch" data-control>UI Switch</a></li><li><a href="#scope" data-control>Scope</a></li><li><a href="#switchboard" data-control>Switchboard</a></li></ul></li><li data-accordion className><a className href="#resources" data-control><span className="icon icon-budicon-733" />Resources</a><ul className="nav" data-content style={{maxHeight: 0, overflow: 'hidden'}}><li><a href="#logos" data-control>Logos</a></li><li><a href="#technologies" data-control>Badges</a></li><li><a href="#Icons" data-control>Icons</a></li><li><a href="#credits" data-control>Credits </a></li></ul></li></ul>
          </nav>
          <footer className="footer"><span id="styleguide-version">Version 4.5.1<span id="version" /></span></footer>
        </div>
      </div>
    );
  }
});

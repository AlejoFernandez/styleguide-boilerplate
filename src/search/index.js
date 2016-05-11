import React, {Component} from 'react';
import styles             from './index.styl';
import classNames         from 'classnames/bind';

let cx = classNames.bind(styles);

export default class Search extends Component {
  render() {
    return (
      <form className={cx('advanced-search-control')}>
        <span className={cx('search-area')}>
          <i className='icon-budicon-489'></i>
          <input className={cx('user-input')} type='text' placeholder='Search for connections'></input>
        </span>
        <span className={cx('controls-search', 'controls', 'pull-right')}>
          <div className={cx('custom-select')}>
            <span>Filter by </span>
            <span className={cx('truncate')} data-select-value>Auth0</span>
            <i className='icon-budicon-460'></i>
            <select defaultValue='author|auth0'>
              <option value='all'>All</option>
              <option value='author|auth0'>By Auth0</option>
              <option value='author|community'>Community Extentions</option>
              <option value='type|cron'>Cron Job</option>
              <option value='type|application'>Application</option>
            </select>
          </div>

          <button type='reset'>Reset <i className='icon-budicon-471'></i></button>
        </span>
      </form>
    );
  }
}

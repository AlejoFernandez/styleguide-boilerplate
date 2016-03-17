'use strict';

import React, {Component} from 'react';
import ReactDOM           from 'react-dom';
import Playground         from 'component-playground';
import Search             from '../components/search';
import searchExample      from 'raw!./examples/search.example';

export default class Index extends Component {
  render() {
    return (
      <div className="component-documentation">
        <Playground
          codeText={searchExample}
          scope={{React: React, Search: Search}}
          />
      </div>
    );
  }
}

ReactDOM.render(<Index/>, document.getElementById("content"));

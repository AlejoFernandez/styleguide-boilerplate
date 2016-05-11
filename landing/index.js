import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import Aside from './components/aside';

import { Search, WebHeader, WebFooter, Modal } from '../src';

export default function Index() {

  var webfooter = new WebFooter;

  return (
    <div>

      <Aside />

      <div className="content">

        <div className="component-documentation">
          <Playground codeText={webfooter.getExample()}  scope={{React: React, WebFooter: WebFooter}} />
        </div>

      </div>

    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('content'));

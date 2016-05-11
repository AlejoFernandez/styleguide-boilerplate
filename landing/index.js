import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import { Search, WebHeader, WebFooter, Modal } from '../src';

export default function Index() {

  var webfooter = new WebFooter;

  return (
    <div className="component-documentation">

      <Playground codeText={webfooter.getExample()}  scope={{React: React, WebFooter: WebFooter}} />
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('content'));

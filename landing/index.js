import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import { Search, WebHeader, WebFooter, Modal } from '../src';

export default function Index() {

  var modal = new Modal;

  return (
    <div className="component-documentation">
      <Playground codeText={modal.getExample()} scope={{ React, Search }} />
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('content'));

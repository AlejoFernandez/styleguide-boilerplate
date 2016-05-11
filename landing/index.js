import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import { Modal } from '../src';

export default function Index() {
  return (
    <div className="component-documentation">
      <Playground codeText="ssds" scope={{ React, Modal }} />
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('content'));

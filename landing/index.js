import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import { Search, WebHeader, WebFooter, Modal } from '../src';
import { searchExample, WebHeaderExample, WebFooterExample, ModalExample } from './playground/examples';

export default function Index() {
  return (
    <div className="component-documentation">
      <Playground codeText={searchExample} scope={{ React, Search }} />
      <Playground codeText={WebHeaderExample} scope={{ React, WebHeader }} />
      <Playground codeText={WebFooterExample} scope={{ React, WebFooter }} />
      <Playground codeText={ModalExample} scope={{ React, Modal }} />
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('content'));

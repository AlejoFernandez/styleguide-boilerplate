import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import { Search, Header, WebFooter, Modal } from '../components';
import { searchExample, headerExample, WebFooterExample, ModalExample } from './examples';

export default function Index() {
  return (
    <div className="component-documentation">
      <Playground codeText={searchExample} scope={{ React, Search }} />
      <Playground codeText={headerExample} scope={{ React, Header }} />
      <Playground codeText={WebFooterExample} scope={{ React, WebFooter }} />
      <Playground codeText={ModalExample} scope={{ React, Modal }} />
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('content'));

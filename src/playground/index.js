import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import { Search, Header, WebFooter } from '../components';
import { searchExample, headerExample, WebFooterExample } from './examples';

export default function Index() {
  return (
    <div className="component-documentation">
      <Playground codeText={searchExample} scope={{ React, Search }} />
      <Playground codeText={headerExample} scope={{ React, Header }} />
      <Playground codeText={WebFooterExample} scope={{ React, WebFooter }} />
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('content'));

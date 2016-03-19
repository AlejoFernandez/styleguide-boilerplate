import React from 'react';
import ReactDOM from 'react-dom';
import Playground from 'component-playground';
import Search from '../components/search';
import searchExample from 'raw!./examples/search.example';
import Header from '../components/header';
import headerExample from 'raw!./examples/header.example';

export default function Index() {
  return (
    <div className="component-documentation">
      <Playground codeText={searchExample} scope={{ React, Search }} />
      <Playground codeText={headerExample} scope={{ React, Header }} />
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('content'));

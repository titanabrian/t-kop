
import { Heading, Pane, SearchInput } from 'evergreen-ui';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Content from './modules/content';
import Sidebar from './modules/sidebar';
import './style.css';

ReactDOM.render(
  <>
  <Pane>
    <Pane height="20px" background="#2c1f63"></Pane>
    <Pane height="50px" background="#504190" padding="15px" display="flex">
        <Heading size={700} color="white">TAccounting</Heading>
        <SearchInput marginLeft="auto" width="400px" placeholder="What are you looking for" />
    </Pane>
    <Pane display="flex">
      <Sidebar/>
      <Content/>
    </Pane>
  </Pane>
  </>,
  document.getElementById('app'),
);

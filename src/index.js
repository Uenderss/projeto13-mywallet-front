import React,{StrictMode} from 'react';
import ReactDom from 'react-dom';
import App from './App';
import GlobalCss from "./GlobalCss";

ReactDom.render( <StrictMode>
    <GlobalCss />
    <App />
  </StrictMode>, document.getElementById('root'));
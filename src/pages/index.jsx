import React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import '../styles.css';
import { Store } from '../Store';
import Main from '../components/Main';

function shouldForwardProp(propName, target) {
  if (typeof target === 'string') {
    return isPropValid(propName);
  }
  return true;
}

const IndexPage = () => (
  <StyleSheetManager shouldForwardProp={shouldForwardProp}>
    <Store>
      <Main />
    </Store>
  </StyleSheetManager>
);

export default IndexPage;

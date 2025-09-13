import React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';
import '../styles.css';
import { Store } from '../Store';
import Main from '../components/Main';
import Disclaimer from '../components/Disclaimer';

function shouldForwardProp(propName, target) {
  if (typeof target === 'string') {
    return isPropValid(propName);
  }
  return true;
}

const IndexPage = () => {
  const [showDisclaimer, setShowDisclaimer] = React.useState(true);
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <Store>
        {showDisclaimer && <Disclaimer setShowDisclaimer={setShowDisclaimer} />}
        <Main />
      </Store>
    </StyleSheetManager>
  )
};

export default IndexPage;

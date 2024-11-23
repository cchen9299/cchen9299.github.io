import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 10px 20px;;
    color: rgb(175, 232, 255);
    p {
      margin-top: 10px;
    }
    h2, h4 {
      margin-top: 10px;
    }
`;

export default function BasementInterface() {
  return (
    <Wrapper>
      <h1>Acitve Projects</h1>
      <h2>This Site</h2>
      <h4>Features</h4>
      <p>Implement Character</p>
      <p>Light/Dark Mode</p>
      <p>Customizable Theme</p>
      <p>Flying Cars</p>
      <p>Micro Animations</p>
      <p>Polish</p>
      <p>Customizable Furniture and Clothing</p>
      <p>Implement viewport for mobile(?)</p>
      <p>Accessibility(?)</p>
      <h4>Infrastructure</h4>
      <p>Full CICD Pipeline</p>
      <p>Functional Testing (and ideally minimal Unit Tests)</p>
      <h2>Algotrade</h2>
      <h2>Automatic Blind Closer</h2>
      <h2>Self Deployed Trash Bins</h2>
    </Wrapper>
  );
}

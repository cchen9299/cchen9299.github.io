/* eslint-disable max-len -- for copy */
import React from 'react';
import styled from 'styled-components';

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  p {
    margin-top: 10px;
    color: rgb(175, 232, 255);
  }

  h2 {
    color: rgb(175, 232, 255);
    mix-blend-mode: color-dodge;
  }

  h5 {
    mix-blend-mode: color-dodge;
    color: rgb(104, 166, 238);
    font-size: 17px;
  }
`;

const SubtextWrapper = styled.h6`
    mix-blend-mode: color-dodge;
    color: rgb(104, 166, 238);
    font-size: 14px;
    font-weight: 400;
`;

export default function BedroomInterface() {
  return (
    <Wrapper>
      <div style={{ display: 'flex' }}>
        <LeftColumn>
          <h5>Present - 2021</h5>
        </LeftColumn>
        <RightColumn>
          <h2>Fullstack Engineer</h2>
          <SubtextWrapper>American Express</SubtextWrapper>
          <p>Developed consumer facing web applications for American Express in frontend and backend technologies.</p>
          <p>Lead the reformation of how software testing is conducted for the same web application.</p>
          <p>Contributed to the migration of the CI pipelines from Jenkins to Github Actions and the shape of the CD process.</p>
          <p>Pioneered on many Developer Experience focused automation and process imporvements.</p>
        </RightColumn>
      </div>
      <div style={{ display: 'flex', marginTop: 20 }}>
        <LeftColumn>
          <h5>2021 - 2019</h5>
        </LeftColumn>
        <RightColumn>
          <h2>UIUX Designer</h2>
          <SubtextWrapper>Synapse Studios</SubtextWrapper>
          <p>Designed two mobile apps from ground up from conducting user research to high fidelity wireframes.</p>
          <p>Developed all code related to styling.</p>
          <p>Advocated for design collaboration across individual scrum teams focused on different clients.</p>
        </RightColumn>
      </div>
      <div style={{ display: 'flex', marginTop: 20 }}>
        <LeftColumn>
          <h5>2019 - 2018</h5>
        </LeftColumn>
        <RightColumn>
          <h2>Visual Designer</h2>
          <SubtextWrapper>Dauntless Studio</SubtextWrapper>
          <p>Designed two mobile apps from ground up.</p>
          <p>Developed all code related to styling.</p>
        </RightColumn>
      </div>
    </Wrapper>
  );
}

/* eslint-enable max-len -- for copy */

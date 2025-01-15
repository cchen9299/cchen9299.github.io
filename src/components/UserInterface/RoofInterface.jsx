import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    h1{
      color: rgb(175, 232, 255);
    }

    p {
        margin-top: 10px;
        color: rgb(175, 232, 255);
    }
    h3{
      mix-blend-mode: color-dodge;
    }
`;

const DetailsContainer = styled.div`
  padding: 10px 20px 20px;
  scrollbar-color: rgba(7, 18, 32, 0.7) rgb(32, 117, 214);
  scrollbar-width: thin;
  background-color: rgba(7, 18, 32, 0.7);
  border: 2px solid rgb(32, 117, 214);
  margin-top: 20px;
  overflow-y: scroll;
`;

export default function RoofInterface() {
  return (
    <Wrapper>
      <h1>{'Hi, I\'m Hank.'}</h1>
      <h3>{'I\'m a Software Engineer. Mostly.'}</h3>
      <DetailsContainer>
        <p>
          {`This portfolio is the manifestation of an idea focusing around the CSS parallax
        scroll I've had since my designer days. Now a software engineer, I've tossed in
        some additional video game like flavors to scratch the itch of wanting to make a video
        game from scratch (but everytime I start I realize how much work there is...)`}
        </p>

        <p>
          {`Additionally, I have added a "scenamatic" mode that hijacks the scroll bar. You can turn 
          it off in the Settings.`}
        </p>

        <p style={{ mixBlendMode: 'color-dodge' }}>Disclaimers:</p>
        <p>- This site has not been optimized for non-chromium browsers</p>
        <p>- Mobile responsive is none existence</p>
        <p>{'- There is a lot that\'s still a work in progress. Full list in the Basement'}</p>
      </DetailsContainer>
    </Wrapper>
  );
}

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    color: rgb(175, 232, 255);
    p {
        margin-top: 10px;
    }
`;

export default function RoofInterface() {
  return (
    <Wrapper>
      <h1>{'Hi, I\'m Hank. I\'m a Software Engineer. Mostly.'}</h1>
      <p>
        {`This portfolio is the manifestation of an idea focusing around the CSS parallax
        scroll I've had since my designer days. Now a software engineer, I've tossed in
        some additional video game like flavors to scratch the itch of wanting to make a video
        game from scratch (but everytime I start I realize how much work there is...)`}
      </p>
      <p>Disclaimers:</p>
      <p>- This site has not been optimized for non-chromium browsers</p>
      <p>- Mobile responsive is none existence</p>
      <p>{'- There is a lot that\'s still a work in progress. Full list in the Basement'}</p>
    </Wrapper>
  );
}

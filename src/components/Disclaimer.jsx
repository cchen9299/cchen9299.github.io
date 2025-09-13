import React from 'react';
import styled from 'styled-components';
import '../styles.css';
import { CINEMATIC_COVER_HEIGHT } from '../hooks/constants';
import Button from './common/Button';

const DisclaimerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);
  position: absolute;
  z-index: 1002;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(175, 232, 255);
  background-color: rgba(0, 64, 142, 0.5);
  backdrop-filter: blur(20px);
`

const DetailsContainer = styled.div`
  padding: 10px 20px 20px;
  scrollbar-color: rgba(7, 18, 32, 0.7) rgb(32, 117, 214);
  scrollbar-width: thin;
  background-color: rgba(7, 18, 32, 0.7);
  border: 2px solid rgb(32, 117, 214);
  margin-top: 20px;
  overflow-y: scroll;
  max-width: 768px;
`

const Disclaimer = ({setShowDisclaimer}) => {
  return (
    <DisclaimerContainer>
      <DetailsContainer>
        <h1>Hello There!</h1>
        <br/>
        <p>{`For those of you visiting this site, chances are you’re here through the portfolio link I included with my resume.`}</p>
        <br/>
        <p>
          {`While this is my latest portfolio, it’s not a fully realized site. Since 2024, I’ve treated it as an experimental project with a heavy emphasis on CSS 
          (and it's not even responsive at all...).
          I intentionally built it with older stacks (Gatsby and Styled Components with just Github Pages) because I hadn’t previously had the chance to use them in a complete project. 
          Most of my professional work has involved either proprietary frameworks or newer stacks like Next.js.`}
        </p>
          <br/>
        <p>
          {`With the rapid rise of GenAI tools and the pace at which they’re reshaping frontend development, 
          I’ve had to deprioritize this project in order to focus on more relevant, market-aligned technologies. 
          So, while I’ve poured many hours into this portfolio as I hand designed and coded every single visual elements on the page and am very proud of the outcome,
          (yes, designs done in Figma, and every element on the page is styled by CSS by hand, no AI tools were used for the design or code here),
          please keep in mind that it’s not a comprehensive reflection of my skills and experience. If you’d like to see more complete and up-to-date examples of my work, feel free to reach out. 
          Much of it is private to my family business or my current employer, but I’d be happy to share what I can.`}
        </p>
          <br/>
        <p>
          {`I’ll be adding more interactive elements on this site to link to public projects, so stay tuned and thank you for your understanding!`}
        </p>
          <br/>
        <p>
          {`This site was deisnged and optimized for screen sizes ranging from `}
            <span style={{ color: 'yellow' }}>2560x1440</span>
            {` to `}
            <span style={{ color: 'yellow' }}>1440x1024</span>
          {` tested only on Chromium Browsers with no accessibility standards.`}
        </p>
          <br/>
      <div style={{ maxWidth: 300 }}>
        <Button text={'Continue'} onClick={() => setShowDisclaimer(false)} />
      </div>
      </DetailsContainer>
    </DisclaimerContainer>
  );
};

export default Disclaimer;

const Cover = styled.div`
  width: 100vw;
  height: calc(${({ isImmersive }) => (isImmersive ? CINEMATIC_COVER_HEIGHT : 0)});
  background-color: black;
  position: absolute;
  z-index: 1001;
  &:last-child{
      bottom: 0;
  }
`;

import styled from 'styled-components'
import { backgroundDark, secondary } from '../colorScheme'

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  margin-left: 6vw;
  width: 88vw;
  background: ${backgroundDark};
  padding: 1rem 0;
  z-index: 5;

  @media (max-width: 768px) {
    width: 100vw;
    margin-left: 0;
  }
`

export const FooterText = styled.h1`
  color: ${secondary};
  font-size: 0.95rem;
  font-family: Sora-Light;
  text-align: center;
`

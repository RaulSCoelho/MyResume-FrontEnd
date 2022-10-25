import { rgba, shade } from 'polished'
import styled from 'styled-components'

export const LoadingStyle = styled.div`
  .loader {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: ${props =>
      rgba(shade(0.1, props.theme.colors.background), 0.9)};
    z-index: 1;
  }

  .spinner {
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: #3d5af1 transparent #3d5af1 transparent;
    border-radius: 50%;
    animation: spin-anim 1.2s linear infinite;
  }

  @keyframes spin-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

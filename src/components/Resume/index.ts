import { FlexStyle } from 'components/Flex/styles'
import styled from 'styled-components'

export const ResumeWrap = styled(FlexStyle)`
  @media (max-width: 700px) {
    height: calc(100% - 50px);
  }
`

export const ResumeStyle = styled.div`
  background: ${props => props.theme.colors.resumeCard};
  color: ${props => props.theme.colors.text};
  width: 70%;
  height: 90%;
  padding: 10px;
  display: flex;
  align-items: start;
  box-shadow: 4px 6px 5px -2px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;

  .content {
    justify-content: start;
    align-items: start;
  }

  .subContent {
    height: auto;
  }

  .main {
    width: 60%;
    padding: 0 30px;
    justify-content: space-between;
  }

  #socialMedias,
  #skills {
    justify-content: center;
    flex-flow: wrap;
    padding: 20px 0;
  }

  @media (max-width: 1140px) {
    flex-direction: column;

    .main {
      overflow: auto;
      height: 80%;
    }

    .content {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
`

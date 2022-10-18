import styled from 'styled-components'

export const ProfileBaseStyle = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-right: 2px solid ${props => props.theme.colors.background};

  #profilePic {
    height: auto;
    margin-top: 30px;
    justify-content: start;

    img {
      height: max(14vw, 130px);
      border-radius: 50%;
      max-height: 250px;
    }
  }

  #profileBaseContent {
    padding-top: 10px;
    justify-content: start;

    p {
      margin: 10px 0;
    }
  }
`

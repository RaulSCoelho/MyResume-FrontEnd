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
      height: max(13vw, 130px);
      border-radius: 50%;
      max-height: 250px;
      margin: 0 10px 0 0;
    }
  }

  #profileBaseContent {
    justify-content: start;

    p {
      margin: 10px 0;
    }
  }

  @media (max-width: 1110px) {
    width: 100%;
    height: 170px;
    padding: 10px;
    align-items: center;
    flex-direction: row;
    border: none;
    border-bottom: 2px solid ${props => props.theme.colors.background};
    overflow: hidden;

    #profilePic,
    #profileBaseContent {
      margin: 0;
      padding: 0;
    }

    #profilePic {
      width: auto;
    }

    #profileBaseContent {
      flex-flow: column wrap;
      p {
        font-size: 18px;
        width: 50%;
        padding: 0 10px;
        text-align: left;
      }
    }
  }

  @media (max-width: 864px) {
    #profileBaseContent {
      flex-flow: column;
      justify-content: center;
      align-items: center;

      #email,
      #others {
        display: none;
      }

      p {
        font-size: 18px;
        width: auto;
        padding: 0;
        text-align: left;
      }
    }
  }
`

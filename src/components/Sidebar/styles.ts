import { shade } from 'polished'
import styled from 'styled-components'

export const SidebarStyle = styled.div`
  background-color: ${props => props.theme.colors.primary};
  position: sticky;
  top: 0;
  display: flex;
  width: 50px;
  height: 100vh;
  transition: all 0.25s ease 0s;

  &:hover {
    width: 200px;

    #sidebarItemText {
      width: auto;
      margin-left: 10px;
    }
  }

  #sidebar-buttons {
    justify-content: space-between;
    flex-direction: column;

    #sidebar-buttons-page {
      justify-content: start;
      height: auto;
    }

    #sidebar-buttons-toggle {
      justify-content: end;
      height: auto;
    }
  }

  @media (max-width: 724px) {
    height: 50px;
    width: 100%;
    box-shadow: 4px 6px 5px -2px rgba(0, 0, 0, 0.2);

    #sidebar-buttons {
      justify-content: space-between;
      flex-direction: row;

      #sidebar-buttons-page {
        flex-direction: row;
        justify-content: space-around;
      }

      #sidebar-buttons-toggle {
        flex-direction: row;
        width: auto;
      }
    }

    &:hover {
      width: unset;

      #sidebarItemText {
        width: 0;
        margin: 0;
      }
    }
  }
`

export const SidebarItemStyle = styled.div`
  width: 100%;
  padding: 10px;

  &:hover {
    background-color: ${props => shade(0.1, props.theme.colors.primary)};

    #sidebarItemText {
      font-weight: bold;
    }
  }

  #sidebarItem {
    flex-direction: row;
    justify-content: start;
  }

  #sidebarItemText {
    width: 0;
    overflow: hidden;
  }

  @media (max-width: 724px) {
    width: 100%;

    #sidebarItem {
      width: 100%;
      justify-content: center;
    }
  }
`

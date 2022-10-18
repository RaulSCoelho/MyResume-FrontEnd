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
`

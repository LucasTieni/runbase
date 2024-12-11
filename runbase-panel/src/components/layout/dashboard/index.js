import * as S from './styles'
import Menu from 'components/menu'
import { DashboardIcon, GearIcon, IdCardIcon, MobileIcon } from '@radix-ui/react-icons'
import Nav from 'components/nav'

export default function Layout({ children, teste }) {
  return (
    <S.Container>
      <S.Header>
        <Nav />
      </S.Header>
      <S.Sidebar>
        <Menu variant={'active'}>
          <DashboardIcon />
          Projects
        </Menu>
        <Menu>
          <IdCardIcon />
          Billing
        </Menu>
        <Menu>
          <MobileIcon />
          Templates
        </Menu>
        <Menu>
          <GearIcon />
          Settings
        </Menu>
      </S.Sidebar>
      <S.Stage>{children}</S.Stage>
    </S.Container>
  )
}

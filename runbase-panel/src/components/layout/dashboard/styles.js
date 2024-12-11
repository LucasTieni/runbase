import { styled } from 'config/stitches.config'

export const Org = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '24px 0 16px 0',
})

export const Header = styled('div', {
  width: '100%',
  height: '56px',
  backgroundColor: '$neutral1',
  borderBottom: '1px solid $neutral5',
  gridArea: 'header',
  position: 'fixed',
  zIndex: '1',
})

export const Sidebar = styled('div', {
  width: '300px',
  height: '100%',
  padding: '16px',
  background: '$neutral1',
  borderRight: '1px solid $neutral5',
  gridArea: 'sidebar',
  position: 'fixed',
  top: '56px',
})

/* --------------------------------------------------------------------------------------------- */

export const Stage = styled('div', {
  width: '100%',
  height: '100%',
  padding: '16px 24px',
  background: '#fff',
  gridArea: 'stage',
  top: '106px',
})

export const Tabs = styled('div', {
  width: '100%',
  height: '50px',
  background: '#fff',
  borderBottom: '1px solid #dbdbdb',
  gridArea: 'tabs',
})

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '300px 1fr',
  gridTemplateRows: '56px 1fr',
  gridTemplateAreas: `
    'header header header'
    'sidebar stage stage'
    'sidebar stage stage'
    'sidebar stage stage'
    'sidebar stage stage'
  `,
})

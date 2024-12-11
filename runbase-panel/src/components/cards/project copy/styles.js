import { styled } from 'config/stitches.config'

export const Card = styled('div', {
  width: '100%',
  height: '94px',
  padding: '24px',
  borderRadius: '$md',
  background: '$neutral1',
  borderBottom: '1px solid $neutral5',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '$e200',
  marginBottom: '24px',
  position: 'relative',
})

export const Col = styled('div', {
  paddingRight: '46px',
})

export const Logo = styled('div', {
  width: '32px',
  height: '32px',
  borderRadius: '100px',
  background: '#4945FF',
})

export const Label = styled('div', {
  fontSize: '$md',
  color: '$onSurfaceLightMedium',
  marginBottom: '4px',
})

export const Text = styled('div', {
  fontSize: '$lg',
  color: '$onSurfaceLightHigh',
})

export const Icon = styled('div', {
  width: '24px',
  height: '24px',
  position: 'absolute',
  right: '24px',
})

import { styled } from 'config/stitches.config'

export const Card = styled('div', {
  width: '248px',
  padding: '16px',
  borderRadius: '$md',
  background: '$neutral1',
  border: '1px solid $neutral3',
  boxShadow: '$card',
  margin: '0 16px 16px 0',
})

export const ThumbContainer = styled('div', {
  width: '100%',
  display: 'flex',
  padding: '28px 0',
  justifyContent: 'center',
})

export const Thumb = styled('div', {
  width: '100px',
  height: '100px',
  background: '$neutral6',
  borderRadius: '$md',
})

export const Description = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Name = styled('div', {
  color: '$onSurfaceLightHigh',
  fontWeight: '600',
  fontSize: '14px',
  lineHeight: '170%',
})

export const Status = styled('div', {
  color: '$onSurfaceLightMedium',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '150%',
})

export const Icon = styled('div', {
  svg: {
    width: '19px',
    height: '19px',
  },
})

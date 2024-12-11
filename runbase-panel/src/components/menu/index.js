import { styled } from 'config/stitches.config'

const Menu = styled('button', {
  all: 'unset',
  width: '100%',
  height: '40px',
  padding: '0 16px',
  borderRadius: '$sm',
  fontSize: '$md',
  fontWeight: '$semibold',
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition: '.2s',
  transitionTimingFunction: 'ease-in',
  display: 'flex',
  alignItems: 'center',

  svg: {
    width: '19px',
    height: '19px',
    marginRight: '8px',
    fill: '$onSurfaceLightHigh',
  },

  variants: {
    variant: {
      active: {
        color: '$onSurfaceLightHigh',
        background: '$neutral3',

        '&:not(:disabled):hover': {
          background: '$neutral4',
        },
      },

      default: {
        color: '$onSurfaceLightHigh',
        background: '$neutral1',

        '&:not(:disabled):hover': {
          background: '$neutral3',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export default Menu

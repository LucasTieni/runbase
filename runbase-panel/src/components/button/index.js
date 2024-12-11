import { styled } from 'config/stitches.config'

const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$md',
  fontWeight: '$medium',
  textAlign: 'center',
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition: '.2s',
  transitionTimingFunction: 'ease-in',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:disabled': {
    cursor: 'not-allowed',
    color: '$onSurfaceLightLow',
    background: '$neutral3',
    svg: {
      fill: '$onSurfaceLightLow',
    },
  },

  variants: {
    variant: {
      primary: {
        color: '$onSurfaceDarkHigh',
        background: '$primary6',

        '&:not(:disabled):hover': {
          background: '$primary8',
        },
        svg: {
          fill: '$onSurfaceDarkHigh',
        },
      },

      secondary: {
        color: '$onSurfacePrimarytHigh',
        border: '1px solid $primary6',

        '&:not(:disabled):hover': {
          background: '$neutral3',
        },
        svg: {
          fill: '$onSurfacePrimarytHigh',
        },
      },

      ghost: {
        color: '$onSurfacePrimarytHigh',

        '&:not(:disabled):hover': {
          background: '$neutral3',
        },
        svg: {
          fill: '$onSurfacePrimarytHigh',
        },
      },
    },

    size: {
      sm: {
        padding: '$6 $12',
        height: 32,
      },

      md: {
        padding: '$8 $16',
        height: 40,
      },

      lg: {
        padding: '$8 $24',
        height: 48,
      },
    },

    block: {
      true: {
        width: '100%',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export const Spacing = styled('div', {
  width: '8px',
  height: '16px',
})

export default Button

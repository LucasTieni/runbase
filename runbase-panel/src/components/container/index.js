import { styled } from 'config/stitches.config'

const Container = styled('div', {
  margin: 'auto',
  '@sm': {
    width: '540px',
  },
  '@md': {
    width: '720px',
  },
  '@lg': {
    width: '960px',
  },
  '@xl': {
    width: '1200px',
  },
  variants: {
    size: {
      sm: {
        width: '100%',
        '@sm': {
          width: '540px',
        },
      },
      lg: {
        width: '100%',
        '@lg': {
          width: '960px',
        },
      },
      xl: {
        width: '100%',
        '@xl': {
          width: '1200px',
        },
      },
      fluid: {
        width: '100%',
      },
    },
    marginY: {
      4: {
        marginY: '4px',
      },
      8: {
        marginY: '8px',
      },
      16: {
        marginY: '16px',
      },
      24: {
        marginY: '24px',
      },
      32: {
        marginY: '32px',
      },
    },
    marginT: {
      4: {
        marginT: '4px',
      },
      8: {
        marginT: '8px',
      },
      16: {
        marginT: '16px',
      },
      24: {
        marginT: '24px',
      },
      32: {
        marginT: '32px',
      },
    },
    marginB: {
      4: {
        marginB: '4px',
      },
      8: {
        marginB: '8px',
      },
      16: {
        marginB: '16px',
      },
      24: {
        marginB: '24px',
      },
      32: {
        marginB: '32px',
      },
    },
  },
})

export default Container

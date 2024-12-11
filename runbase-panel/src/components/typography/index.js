import { styled } from 'config/stitches.config'

export const Title = styled('h1', {
  margin: 0,
  variants: {
    size: {
      h1: {
        fontSize: '$h1',
        lineHeight: '$h1',
      },
      h2: {
        fontSize: '$h2',
        lineHeight: '$h2',
      },
      h3: {
        fontSize: '$h3',
        lineHeight: '$h3',
      },
      h4: {
        fontSize: '$h4',
        lineHeight: '$h4',
      },
      h5: {
        fontSize: '$h5',
        lineHeight: '$h5',
      },
      h6: {
        fontSize: '$h6',
        lineHeight: '$h6',
      },
    },
    weight: {
      bold: {
        fontWeight: '$bold',
      },
      semibold: {
        fontWeight: '$semibold',
      },
      medium: {
        fontWeight: '$medium',
      },
      regular: {
        fontWeight: '$regular',
      },
    },
    type: {
      primary: {
        color: '$onSurfaceLightHigh',
      },
      secondary: {
        color: '$onSurfaceLightMedium',
      },
      disable: {
        color: '$onSurfaceLightLow',
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
  defaultVariants: {
    size: 'h1',
    weight: 'bold',
    type: 'primary',
  },
})

export const Text = styled('p', {
  padding: 0,
  margin: 0,
  variants: {
    size: {
      lg: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      md: {
        fontSize: '$md',
        lineHeight: '$md',
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm',
      },
      xs: {
        fontSize: '$xs',
        lineHeight: '$xs',
      },
    },
    weight: {
      bold: {
        fontWeight: '$bold',
      },
      semibold: {
        fontWeight: '$semibold',
      },
      medium: {
        fontWeight: '$medium',
      },
      regular: {
        fontWeight: '$regular',
      },
    },
    type: {
      primary: {
        color: '$onSurfaceLightHigh',
      },
      secondary: {
        color: '$onSurfaceLightMedium',
      },
      disable: {
        color: '$onSurfaceLightLow',
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
  defaultVariants: {
    size: 'md',
    weight: 'regular',
    type: 'primary',
  },
})

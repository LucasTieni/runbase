import { styled } from 'config/stitches.config'

export const Grid = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
})

export const Col = styled('div', {
  variants: {
    break: {
      12: {
        width: '100%',
      },
      11: {
        width: '91.66666667%',
      },
      10: {
        width: '83.33333333%',
      },
      9: {
        width: '75%',
      },
      8: {
        width: '66.66666667%',
      },
      7: {
        width: '58.33333333%',
      },
      6: {
        width: '50%',
      },
      5: {
        width: '41.66666667%',
      },
      4: {
        width: '25%',
      },
      3: {
        width: '33.33333333%',
      },
      2: {
        width: '16.66666667%',
      },
      1: {
        width: '8.333333333333333%',
      },
    },
    gutter: {
      4: {
        padding: '4px',
      },
      8: {
        padding: '8px',
      },
      16: {
        padding: '16px',
      },
      32: {
        padding: '32px',
      },
    },
  },
  defaultVariants: {
    break: 12,
  },
})

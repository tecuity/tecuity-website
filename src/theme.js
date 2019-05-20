export default {
  primary: {
    color: '#95C93D',
    rgbaFunction: opacity => `rgba(149, 201, 61, ${opacity})`,
    textOn: '#ffffff'
  },
  sos: {
    color: '#f5771f',
    rgbaFunction: opacity => `rgba(245, 119, 31, ${opacity})`,
    textOn: '#ffffff'
  },
  dark: {
    color: '#3D4644',
    textOn: 'rgb(241, 241, 241)'
  },
  mid: {
    color: '#767776',
    rgbaFunction: opacity => `rgba(118, 119, 118, ${opacity})`,
    textOn: 'rgb(241, 241, 241)'
  },
  maxWidth: 1200,
  media: {
    max: {
      xs: '@media(max-width: 650px)',
      sm: '@media(max-width: 736px)',
      md: '@media(max-width: 900px)',
      lg: '@media(max-width: 1280px)'
    },
    min: {
      xs: '@media(min-width: 650px)',
      sm: '@media(min-width: 736px)',
      md: '@media(min-width: 900px)',
      lg: '@media(min-width: 1280px)'
    }
  }
}

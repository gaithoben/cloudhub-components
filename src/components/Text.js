// just copy this code from the driving repo :)
import React, { Component } from 'react';
// import withStyles from '@material-ui/core/styles/withStyles';

import { colors, sizes } from 'theme';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      h1,
      h2,
      h3,
      title,
      header,
      body,
      caption,
      small,
      size,
      transform,
      button,
      // styling
      regular,
      bold,
      semibold,
      medium,
      weight,
      light,
      center,
      right,
      spacing, // letter-spacing
      height, // line-height
      noWrap,
      // colors
      color,
      accent,
      primary,
      secondary,
      tertiary,
      black,
      white,
      gray,
      gray2,
      dark,
      mistyWhite,
      milkyWhite,
      error,
      clear,
      facebook,
      transparent,
      silver,
      steel,
      ricePaper,
      frost,
      cloud,
      windowTint,
      panther,
      charcoal,
      coal,
      bloodOrange,
      snow,
      ember,
      fire,
      drawer,
      eggplant,
      twitterColor,
      facebookColor,
      googleColor,
      linkedinColor,
      pinterestColor,
      youtubeColor,
      tumblrColor,
      behanceColor,
      dribbbleColor,
      redditColor,
      instagramColor,
      success,
      info,
      rose,
      warning,
      danger,
      style,
      children,
      classes,
      ...props
    } = this.props;

    const textStyles = {
      ...styles.text,
      ...(h1 && styles.h1),
      ...(h2 && styles.h2),
      ...(h3 && styles.h3),
      ...(title && styles.title),
      ...(header && styles.header),
      ...(body && styles.body),
      ...(caption && styles.caption),
      ...(small && styles.small),
      ...(size && { fontSize: size }),
      ...(button && styles.button),
      ...(transform && { textTransform: transform }),
      ...(height && { lineHeight: height }),
      ...(noWrap && {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }),
      ...(spacing && { letterSpacing: spacing }),
      ...(weight && { fontWeight: weight }),
      ...(regular && styles.regular),
      ...(bold && styles.bold),
      ...(semibold && styles.semibold),
      ...(medium && styles.medium),
      ...(light && styles.light),
      ...(center && styles.center),
      ...(right && styles.right),
      ...(color && styles[color]),
      ...(color && !styles[color] && { color }),
      // color shortcuts
      ...(accent && styles.accent),
      ...(primary && styles.primary),
      ...(secondary && styles.secondary),
      ...(tertiary && styles.tertiary),
      ...(black && styles.black),
      ...(white && styles.white),
      ...(gray && styles.gray),
      ...(gray2 && styles.gray2),
      ...(dark && styles.dark),
      ...(error && styles.error),
      ...(mistyWhite && styles.mistyWhite),
      ...(milkyWhite && styles.milkyWhite),
      ...(clear && styles.clear),
      ...(facebook && styles.facebook),
      ...(transparent && styles.transparent),
      ...(silver && styles.silver),
      ...(steel && styles.steel),
      ...(error && styles.error),
      ...(ricePaper && styles.ricePaper),
      ...(frost && styles.frost),
      ...(cloud && styles.cloud),
      ...(windowTint && styles.windowTint),
      ...(panther && styles.panther),
      ...(charcoal && styles.charcoal),
      ...(coal && styles.coal),
      ...(bloodOrange && styles.bloodOrange),
      ...(snow && styles.snow),
      ...(ember && styles.ember),
      ...(fire && styles.fire),
      ...(drawer && styles.drawer),
      ...(eggplant && styles.eggplant),
      ...(twitterColor && styles.twitterColor),
      ...(facebookColor && styles.facebookColor),
      ...(googleColor && styles.googleColor),
      ...(linkedinColor && styles.linkedinColor),
      ...(pinterestColor && styles.pinterestColor),
      ...(youtubeColor && styles.youtubeColor),
      ...(tumblrColor && styles.tumblrColor),
      ...(behanceColor && styles.behanceColor),
      ...(dribbbleColor && styles.dribbbleColor),
      ...(redditColor && styles.redditColor),
      ...(instagramColor && styles.instagramColor),
      ...(success && styles.success),
      ...(info && styles.info),
      ...(rose && styles.rose),
      ...(warning && styles.warning),
      ...(danger && styles.danger),
      ...style // rewrite predefined styles
    };

    return (
      <span style={textStyles} {...props}>
        {children}
      </span>
    );
  }
}

const styles = {
  // default style
  text: {
    fontSize: sizes.font,
    color: colors.black
  },
  // variations
  regular: {
    fontWeight: 'normal'
  },
  bold: {
    fontWeight: 'bold'
  },
  semibold: {
    fontWeight: '500'
  },
  medium: {
    fontWeight: '500'
  },
  light: {
    fontWeight: '200'
  },
  thin: {
    fontWeight: 100
  },
  // position
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  // colors
  accent: { color: colors.accent },
  primary: { color: colors.primary },
  secondary: { color: colors.secondary },
  tertiary: { color: colors.tertiary },
  black: { color: colors.black },
  white: { color: colors.white },
  gray: { color: colors.gray },
  gray2: { color: colors.gray2 },
  dark: { color: colors.dark },
  mistyWhite: { color: colors.mistyWhite },
  milkyWhite: { color: colors.milkyWhite },
  error: { color: colors.error },
  clear: { color: colors.clear },
  facebook: { color: colors.facebook },
  transparent: { color: colors.transparent },
  silver: { color: colors.silver },
  steel: { color: colors.steel },
  ricePaper: { color: colors.ricePaper },
  frost: { color: colors.frost },
  cloud: { color: colors.cloud },
  windowTint: { color: colors.windowTint },
  panther: { color: colors.panther },
  charcoal: { color: colors.charcoal },
  coal: { color: colors.coal },
  bloodOrange: { color: colors.bloodOrange },
  snow: { color: colors.snow },
  ember: { color: colors.ember },
  fire: { color: colors.fire },
  drawer: { color: colors.drawer },
  eggplant: { color: colors.eggplant },
  twitterColor: { color: colors.twitterColor },
  facebookColor: { color: colors.facebookColor },
  googleColor: { color: colors.googleColor },
  linkedinColor: { color: colors.linkedinColor },
  pinterestColor: { color: colors.pinterestColor },
  youtubeColor: { color: colors.youtubeColor },
  tumblrColor: { color: colors.tumblrColor },
  behanceColor: { color: colors.behanceColor },
  dribbbleColor: { color: colors.dribbbleColor },
  redditColor: { color: colors.redditColor },
  instagramColor: { color: colors.instagramColor },
  success: { color: colors.success },
  info: { color: colors.info },
  rose: { color: colors.rose },
  warning: { color: colors.warning },
  danger: { color: colors.danger },
  // fonts
  h1: { fontSize: sizes.h1 },
  h2: { fontSize: sizes.h2 },
  h3: { fontSize: sizes.h3 },
  title: { fontSize: sizes.title },
  header: { fontSize: sizes.header },
  body: { fontSize: sizes.body },
  caption: { fontSize: sizes.caption },
  small: { fontSize: sizes.small },
  button: { fontSize: sizes.button }
};

export default Text;

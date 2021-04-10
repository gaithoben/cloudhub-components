import React from 'react';
import Box from '@material-ui/core/Box';
import Loadable from '@react-loadable/revised';
import colors from './theme/Colors';
import sizes from './theme/Sizes';

const BaseWebDatePicker = Loadable({
  loader: () =>
    import(/* webpackChunkName: "BaseTheme" */ './baseweb/BaseWebDatePicker'),
  loading: () => (
    <Box
      borderColor={colors.gray}
      height={sizes.inputHeight}
      borderWidth={0.5}
      borderRadius={sizes.borderRadius}
    >
      <div>loading...</div>
    </Box>
  ),
});

const DateRangePicker = (props) => {
  return <BaseWebDatePicker range {...props} />;
};

export default DateRangePicker;

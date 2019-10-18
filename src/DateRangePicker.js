import React from 'react';
import AntRangePicker from 'cloudhub-react-components/dist/ant/DateFilter';
import { makeStyles } from '@material-ui/core/styles';
import { sizes, fonts } from 'theme';
import Block from './Block';
import Text from './Text';

const getStyles = () => {
  const useStyles = makeStyles({
    datePicker: {
      fontSize: '9px',
      '& .ant-input': {
        ...fonts.default,
        height: sizes.inputHeight,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
      '& .ant-calendar-range-picker-separator': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      },
    },
  });

  return {
    useStyles,
  };
};

const DateRangePicker = ({ meta, ...props }) => {
  const classes = getStyles().useStyles();
  return (
    <Block style={{ marginRight: sizes.margin }}>
      <AntRangePicker
        dateFormat="DD MMM, YYYY"
        {...props}
        className={classes.datePicker}
      />
      <Text small error style={{ height: 10 }}>
        {meta.touched && meta.error && meta.error}
      </Text>
    </Block>
  );
};

DateRangePicker.defaultProps = {
  meta: {},
};

export default DateRangePicker;

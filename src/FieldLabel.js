import React from 'react';
import Text from './Text';
import Block from './Block';
import Button from './Button';

import { sizes } from './theme';

const FieldLabel = ({
  label,
  icon,
  onClick,
  height,
  style,
  textStyles,
  disabled,
  children,
  ...props
}) => {
  const styles = {
    button: {
      textTransform: 'none',
      padding: 0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      height,
      ...style
    }
  };

  const renderIcon = IconComponent => {
    if (IconComponent) {
      return (
        <IconComponent
          style={{
            marginRight: sizes.margin,
            ...textStyles
          }}
        />
      );
    }
    return null;
  };

  return (
    <Block style={{ marginRight: sizes.margin }}>
      <Button
        onClick={onClick}
        style={styles.button}
        disabled={disabled}
        {...props}
      >
        {renderIcon(icon)}

        {label && (
          <Text cropped style={{ ...textStyles }}>
            {label}
          </Text>
        )}
        {children}
      </Button>
      <Text small error style={{ height: 10 }} />
    </Block>
  );
};

FieldLabel.defaultProps = {
  label: 'Label',
  height: sizes.inputHeight,
  onClick: () => {},
  textStyles: { color: 'inherit' },
  disabled: true
};

export default FieldLabel;

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Colors from '../Colors';
import Tooltip from '../Tooltip';

const sliderStyle = {
  handleStyle: {
    borderWidth: 0,
    height: 20,
    width: 20,
    marginTop: -6,
    marginLeft: -9,
  },
  trackStyle: {
    height: 8,
  },
  railStyle: {
    height: 8,
  },
};

const customStyle = css`
  .rc-slider-handle {
    background-color: ${Colors.BLUE[500]};
  }

  .rc-slider-rail {
    background-color: ${Colors.BLUE[200]};
  }

  .rc-slider-track {
    background-color: ${Colors.BLUE[50]};
  }

  .rc-slider-handle:active,
  .rc-slider-handle:focus {
    border: none;
    box-shadow: 0 2px 6px 0 ${Colors.BLUE[50]};
  }

  &.rc-slider-disabled {
    background: none;

    .rc-slider-handle {
      background-color: ${Colors.BLACK[400]};
    }

    .rc-slider-rail {
      background-color: ${Colors.BLACK[100]};
    }

    .rc-slider-track {
      background-color: ${Colors.BLACK[200]};
    }
  }
`;

const StyledSlider = styled(Slider)`
  ${customStyle}
`;
const StyledRange = styled(Slider.Range)`
  ${customStyle}
`;

const StyledTooltip = styled(Tooltip)`
  width: 100%;

  > div:first-child {
    top: -41px;
    left: ${({ value, min, max }) => {
      let half = value;

      if (typeof value === 'object') {
        const { from, to } = value;
        half = (to + from) / 2;
      }

      return ((half - min) / (max - min)) * 100;
    }}%;
  }
`;

class Range extends React.Component {
  constructor(props) {
    super(props);

    this.state = { visible: null };
  }

  handleChange = value => {
    const { onChange } = this.props;
    let rangeValue = value;

    if (Array.isArray(value)) {
      const [from, to] = value;
      rangeValue = { from, to };

      onChange(rangeValue);
    } else {
      onChange(rangeValue);
    }
  };

  handleMouseDown = () => {
    this.setState({ visible: true });
  };

  handleMouseUp = () => {
    this.setState({ visible: false });
  };

  render() {
    const {
      handleChange,
      handleMouseDown,
      handleMouseUp,
      props,
      state: { visible },
    } = this;

    const { value, tipFormatter } = this.props;
    const { from, to } = value;

    const { handleStyle, trackStyle } = sliderStyle;

    const tooltipText =
      typeof value === 'object'
        ? `${tipFormatter(from)} a ${tipFormatter(to)}`
        : tipFormatter(value);

    return (
      <StyledTooltip
        {...props}
        text={tooltipText}
        value={value}
        visible={visible}
      >
        {typeof value === 'object' ? (
          <StyledRange
            {...props}
            {...sliderStyle}
            allowCross={false}
            pushable
            onChange={handleChange}
            onBeforeChange={handleMouseDown}
            onAfterChange={handleMouseUp}
            value={[from, to]}
            handleStyle={[handleStyle, handleStyle]}
            trackStyle={[trackStyle, trackStyle]}
          />
        ) : (
          <StyledSlider
            {...props}
            {...sliderStyle}
            onChange={handleChange}
            onBeforeChange={handleMouseDown}
            onAfterChange={handleMouseUp}
            value={value}
          />
        )}
      </StyledTooltip>
    );
  }
}

Range.defaultProps = {
  max: 100,
  min: 0,
  value: 50,
  onChange: () => {},
  tipFormatter: value => value,
};

Range.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  /** Slider will pass its value to tipFormatter, display its value in Tooltip, and hide Tooltip when return value is null. */
  tipFormatter: PropTypes.func,
  value: (props, propName, componentName) => {
    const { [propName]: value } = props;
    const { max, min } = props;
    const errorMessage = `${propName} prop supplied to ${componentName} is out of bounds. The ${propName} prop must be between ${min} and ${max}.`;
    const isNumber = val => typeof val === 'number';

    if (typeof value === 'object') {
      const { from, to } = value;

      if (!isNumber(from) || !isNumber(to)) {
        return new Error(
          `The 'from' and 'to' keys from ${propName} prop must be a Number.`,
        );
      }

      if (from < min || to > max) {
        return new Error(errorMessage);
      }

      return null;
    }

    if (!isNumber(value)) {
      return new Error(`${propName} prop must be a Number.`);
    }

    if (value < min || value > max) {
      return new Error(errorMessage);
    }

    return null;
  },
};

export default Range;

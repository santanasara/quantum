import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Item from './sub-components/Item';
import Content from './sub-components/Content';
import Header from './sub-components/Header';
import SubHeader from './sub-components/SubHeader';
import { colors, spacing } from '../shared/theme';

const bullets = ({ bullet }) =>
  bullet
    ? css`
        li {
          position: relative;
        }
        li:before {
          content: '${bullet}';
          position: absolute;
          top: 12%;
          right: 100%;
        }
        ${({
          theme: {
            spacing: { large },
          },
        }) => `
          padding-left: ${large}px;
        `}
      `
    : 'padding-left: 0;';

const inlineList = ({ inline }) => css`
  li {
    ${inline && 'display: inline-block;'};
  }
`;

const dividedList = ({
  divided,
  inline,
  theme: {
    colors: {
      neutral: { 100: neutral100 },
    },
  },
}) =>
  divided &&
  css`
    li {
      ${inline ? 'border-right' : 'border-bottom'}: 1px solid ${neutral100};

      &:last-child {
        border: none;
      }
    }
  `;

const Unordered = styled.ul`
  list-style: none;
  margin: 0;

  ${inlineList}
  
  ${bullets}
  
  ${dividedList}
`;

Unordered.displayName = 'UnorderedList';

const Ordered = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;

  counter-reset: count;

  li {
    ${({
      theme: {
        spacing: { xsmall, large },
      },
    }) => css`
      margin-left: ${large}px;
      position: relative;

      &:before {
        content: counter(count) '.';
        counter-increment: count;
        position: absolute;
        right: 100%;
        margin-top: ${xsmall}px;
      }
    `};
  }

  ${inlineList} ${dividedList};
`;

Ordered.displayName = 'OrderedList';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.types = {
      ul: Unordered,
      ol: Ordered,
    };
  }

  _listType = ordered => (ordered ? this.types.ol : this.types.ul);

  static Item = Item;

  static Content = Content;

  static Header = Header;

  static SubHeader = SubHeader;

  render() {
    const {
      ordered,
      items,
      children,
      inline,
      divided,
      bullet,
      theme,
    } = this.props;

    const listItems = children || items.map(Item.create);

    return React.createElement(
      this._listType(ordered),
      {
        inline,
        divided,
        bullet,
        theme,
        ...this.props,
      },
      listItems,
    );
  }
}

List.defaultProps = {
  items: [],
  ordered: false,
  bullet: '',
  inline: false,
  divided: false,
  children: null,
  theme: {
    colors,
    spacing,
  },
};

List.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        content: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({
            header: PropTypes.string,
            subheader: PropTypes.string,
          }),
        ]),
      }),
    ),
  ]),
  ordered: PropTypes.bool,
  inline: PropTypes.bool,
  divided: PropTypes.bool,
  bullet: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  theme: PropTypes.shape({
    colors: PropTypes.object,
    spacing: PropTypes.object,
  }),
};

export default List;

import React from 'react';
import { render } from '@testing-library/react';

import Socials from './Socials';

const allSocialsList = [
  {
    name: 'facebook',
    url: 'https://facebook.com',
    title: 'facebook title of the purpose of this icon',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com',
    title: 'twitter title of the purpose of this icon',
  },
  {
    name: 'youtube',
    url: 'https://youtube.com',
    title: 'youtube title of the purpose of this icon',
  },
];

describe('<Socials />', () => {
  it('should match snapshots', () => {
    const SOCIALS = [
      <Socials items={allSocialsList} />,
      <Socials items={[allSocialsList[0]]} />,
      <Socials items={allSocialsList} size="24" />,
    ];

    SOCIALS.forEach(social => {
      expect(render(social).asFragment()).toMatchSnapshot();
    });
  });

  it('should pass title to <Title /> on SVG ', () => {
    const { container } = render(<Socials items={[allSocialsList[0]]} />);

    const svg = container.querySelector('svg');
    expect(svg.querySelector('title').innerHTML).toBe(allSocialsList[0].title);
  });

  it('should have the same number of social types passed in object items ', () => {
    const { getAllByRole } = render(<Socials items={allSocialsList} />);

    expect(getAllByRole('listitem')).toHaveLength(allSocialsList.length);
  });
});

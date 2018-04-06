import React from 'react';
import { storiesOf } from '@storybook/react';
import HowToImport from '../../.storybook/decorators/HowToImport';
import Input from './Input';

storiesOf('4. Input', module)
  .addDecorator(HowToImport)
  .add('Input', () => (
    <React.Fragment>
      <Input
        label="Default"
        id="default-input"
      />
    </React.Fragment>
  ));

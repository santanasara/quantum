import React from 'react';
import { storiesOf } from '@storybook/react';
import HowToImport from '../../.storybook/decorators/HowToImport';
import Input from './Input';

storiesOf('5. Input', module)
  .addDecorator(HowToImport)
  .add('Input', () => (
    <React.Fragment>
      <Input label="Default" id="default-input" />
      <Input label="With error" error="Error message" id="error-input" />
    </React.Fragment>
  ));

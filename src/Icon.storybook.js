
  import React from 'react'
  import { storiesOf } from '@storybook/react'

  // import Icon from './Icon';

  storiesOf('Icon')
    .add('default', () => (
      <div>
        <style dangerouslySetInnerHTML={{__html: "svg { height: 32px; margin: 10px; }"}} />
      </div>
    ));

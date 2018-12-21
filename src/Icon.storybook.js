
  import React from 'react'
  import { storiesOf } from '@storybook/react'

  import TwitterIcon from './icon/twitter';

  storiesOf('Icon')
    .add('default', () => (
      <div>
        <style dangerouslySetInnerHTML={{__html: "svg { height: 32px; margin: 10px; }"}} />
        <TwitterIcon />
      </div>
    ));

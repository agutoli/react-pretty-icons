import React from 'react';
import iconSvg from '../icons/normalized/yahoo-messenger-smiley-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__yahoo-messenger-smiley-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
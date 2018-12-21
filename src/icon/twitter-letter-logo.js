import React from 'react';
import iconSvg from '../icons/normalized/twitter-letter-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__twitter-letter-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
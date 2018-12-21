import React from 'react';
import iconSvg from '../icons/normalized/flickr-logo-of-two-dots.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flickr-logo-of-two-dots" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
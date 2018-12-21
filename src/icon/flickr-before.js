import React from 'react';
import iconSvg from '../icons/normalized/flickr-before.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flickr-before" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
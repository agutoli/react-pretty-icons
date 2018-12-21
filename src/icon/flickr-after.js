import React from 'react';
import iconSvg from '../icons/normalized/flickr-after.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__flickr-after" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
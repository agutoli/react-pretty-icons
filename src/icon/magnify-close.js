import React from 'react';
import iconSvg from '../icons/normalized/magnify-close.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__magnify-close" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
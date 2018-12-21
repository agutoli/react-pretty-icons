import React from 'react';
import iconSvg from '../icons/normalized/vimeo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vimeo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
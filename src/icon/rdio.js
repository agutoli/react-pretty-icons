import React from 'react';
import iconSvg from '../icons/normalized/rdio.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rdio" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
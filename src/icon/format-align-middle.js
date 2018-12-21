import React from 'react';
import iconSvg from '../icons/normalized/format-align-middle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-align-middle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
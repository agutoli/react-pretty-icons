import React from 'react';
import iconSvg from '../icons/normalized/format-align-right.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-align-right" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
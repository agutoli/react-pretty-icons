import React from 'react';
import iconSvg from '../icons/normalized/format-align-center.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-align-center" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
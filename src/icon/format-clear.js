import React from 'react';
import iconSvg from '../icons/normalized/format-clear.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-clear" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
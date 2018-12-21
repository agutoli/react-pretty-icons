import React from 'react';
import iconSvg from '../icons/normalized/trademark.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__trademark" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
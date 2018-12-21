import React from 'react';
import iconSvg from '../icons/normalized/registered-trademark.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__registered-trademark" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
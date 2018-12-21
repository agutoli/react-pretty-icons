import React from 'react';
import iconSvg from '../icons/normalized/dialpad.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dialpad" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
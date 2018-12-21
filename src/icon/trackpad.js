import React from 'react';
import iconSvg from '../icons/normalized/trackpad.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__trackpad" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
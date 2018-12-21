import React from 'react';
import iconSvg from '../icons/normalized/rounded-corner.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rounded-corner" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
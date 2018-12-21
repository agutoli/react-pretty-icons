import React from 'react';
import iconSvg from '../icons/normalized/tshirt-v.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tshirt-v" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
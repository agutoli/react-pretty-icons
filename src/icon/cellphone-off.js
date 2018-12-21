import React from 'react';
import iconSvg from '../icons/normalized/cellphone-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cellphone-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/cellphone-erase.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cellphone-erase" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
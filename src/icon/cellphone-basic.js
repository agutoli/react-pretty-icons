import React from 'react';
import iconSvg from '../icons/normalized/cellphone-basic.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cellphone-basic" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
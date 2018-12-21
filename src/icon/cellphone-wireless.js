import React from 'react';
import iconSvg from '../icons/normalized/cellphone-wireless.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cellphone-wireless" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
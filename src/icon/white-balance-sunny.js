import React from 'react';
import iconSvg from '../icons/normalized/white-balance-sunny.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__white-balance-sunny" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/router-wireless.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__router-wireless" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
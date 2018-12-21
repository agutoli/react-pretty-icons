import React from 'react';
import iconSvg from '../icons/normalized/television-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__television-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
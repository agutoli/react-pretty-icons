import React from 'react';
import iconSvg from '../icons/normalized/select-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__select-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
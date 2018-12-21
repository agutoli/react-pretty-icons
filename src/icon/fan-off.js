import React from 'react';
import iconSvg from '../icons/normalized/fan-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__fan-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
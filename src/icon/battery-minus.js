import React from 'react';
import iconSvg from '../icons/normalized/battery-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
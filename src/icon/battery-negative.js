import React from 'react';
import iconSvg from '../icons/normalized/battery-negative.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__battery-negative" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
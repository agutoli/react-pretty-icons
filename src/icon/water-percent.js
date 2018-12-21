import React from 'react';
import iconSvg from '../icons/normalized/water-percent.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__water-percent" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
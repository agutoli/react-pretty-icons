import React from 'react';
import iconSvg from '../icons/normalized/stats.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__stats" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/chronometer-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chronometer-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
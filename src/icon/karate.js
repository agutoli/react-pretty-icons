import React from 'react';
import iconSvg from '../icons/normalized/karate.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__karate" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
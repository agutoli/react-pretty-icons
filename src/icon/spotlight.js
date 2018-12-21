import React from 'react';
import iconSvg from '../icons/normalized/spotlight.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__spotlight" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
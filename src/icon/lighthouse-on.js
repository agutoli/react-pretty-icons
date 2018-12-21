import React from 'react';
import iconSvg from '../icons/normalized/lighthouse-on.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__lighthouse-on" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
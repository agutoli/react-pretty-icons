import React from 'react';
import iconSvg from '../icons/normalized/jsfiddle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__jsfiddle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/door-open.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__door-open" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
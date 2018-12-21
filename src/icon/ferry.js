import React from 'react';
import iconSvg from '../icons/normalized/ferry.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ferry" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
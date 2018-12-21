import React from 'react';
import iconSvg from '../icons/normalized/collapse-all.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__collapse-all" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
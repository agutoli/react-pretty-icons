import React from 'react';
import iconSvg from '../icons/normalized/expand-all.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__expand-all" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
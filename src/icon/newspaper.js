import React from 'react';
import iconSvg from '../icons/normalized/newspaper.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__newspaper" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
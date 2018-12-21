import React from 'react';
import iconSvg from '../icons/normalized/volleyball.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__volleyball" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
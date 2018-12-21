import React from 'react';
import iconSvg from '../icons/normalized/violin.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__violin" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
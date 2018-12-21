import React from 'react';
import iconSvg from '../icons/normalized/pandora.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pandora" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
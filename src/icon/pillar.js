import React from 'react';
import iconSvg from '../icons/normalized/pillar.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pillar" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
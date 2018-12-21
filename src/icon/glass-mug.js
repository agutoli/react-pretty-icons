import React from 'react';
import iconSvg from '../icons/normalized/glass-mug.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__glass-mug" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
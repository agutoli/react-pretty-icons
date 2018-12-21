import React from 'react';
import iconSvg from '../icons/normalized/engine-off-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__engine-off-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
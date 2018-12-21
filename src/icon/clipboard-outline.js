import React from 'react';
import iconSvg from '../icons/normalized/clipboard-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clipboard-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
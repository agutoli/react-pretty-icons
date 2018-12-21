import React from 'react';
import iconSvg from '../icons/normalized/clipboard-pulse-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clipboard-pulse-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
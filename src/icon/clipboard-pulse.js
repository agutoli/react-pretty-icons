import React from 'react';
import iconSvg from '../icons/normalized/clipboard-pulse.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clipboard-pulse" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
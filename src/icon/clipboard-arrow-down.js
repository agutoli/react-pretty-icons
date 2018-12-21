import React from 'react';
import iconSvg from '../icons/normalized/clipboard-arrow-down.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clipboard-arrow-down" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
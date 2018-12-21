import React from 'react';
import iconSvg from '../icons/normalized/clipboard-arrow-left.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clipboard-arrow-left" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
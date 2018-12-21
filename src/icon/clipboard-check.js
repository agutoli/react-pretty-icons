import React from 'react';
import iconSvg from '../icons/normalized/clipboard-check.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clipboard-check" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
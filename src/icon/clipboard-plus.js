import React from 'react';
import iconSvg from '../icons/normalized/clipboard-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__clipboard-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
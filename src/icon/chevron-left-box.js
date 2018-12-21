import React from 'react';
import iconSvg from '../icons/normalized/chevron-left-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chevron-left-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
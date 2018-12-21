import React from 'react';
import iconSvg from '../icons/normalized/chevron-down-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chevron-down-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
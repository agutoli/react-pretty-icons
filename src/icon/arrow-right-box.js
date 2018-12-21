import React from 'react';
import iconSvg from '../icons/normalized/arrow-right-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-right-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/arrow-up-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-up-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
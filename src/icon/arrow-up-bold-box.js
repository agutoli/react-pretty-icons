import React from 'react';
import iconSvg from '../icons/normalized/arrow-up-bold-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-up-bold-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/arrow-left-bold.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-left-bold" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
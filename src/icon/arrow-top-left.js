import React from 'react';
import iconSvg from '../icons/normalized/arrow-top-left.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-top-left" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
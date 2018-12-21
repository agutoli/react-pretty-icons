import React from 'react';
import iconSvg from '../icons/normalized/arrow-top-right.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-top-right" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
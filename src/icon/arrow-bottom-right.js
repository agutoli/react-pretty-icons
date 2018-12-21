import React from 'react';
import iconSvg from '../icons/normalized/arrow-bottom-right.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-bottom-right" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/arrow-split-vertical.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-split-vertical" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
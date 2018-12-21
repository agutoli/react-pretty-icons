import React from 'react';
import iconSvg from '../icons/normalized/arrow-up.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-up" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
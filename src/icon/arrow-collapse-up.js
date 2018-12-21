import React from 'react';
import iconSvg from '../icons/normalized/arrow-collapse-up.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-collapse-up" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
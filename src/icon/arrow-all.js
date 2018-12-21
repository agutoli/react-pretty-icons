import React from 'react';
import iconSvg from '../icons/normalized/arrow-all.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-all" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
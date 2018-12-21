import React from 'react';
import iconSvg from '../icons/normalized/arrow-right-thick.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-right-thick" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/arrow-top-left-thick.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-top-left-thick" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
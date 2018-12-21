import React from 'react';
import iconSvg from '../icons/normalized/arrow-top-right-thick.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-top-right-thick" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
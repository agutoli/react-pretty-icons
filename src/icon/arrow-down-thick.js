import React from 'react';
import iconSvg from '../icons/normalized/arrow-down-thick.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__arrow-down-thick" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
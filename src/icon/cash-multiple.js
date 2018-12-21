import React from 'react';
import iconSvg from '../icons/normalized/cash-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cash-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
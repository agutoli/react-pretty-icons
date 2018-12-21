import React from 'react';
import iconSvg from '../icons/normalized/format-header-increase.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-header-increase" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
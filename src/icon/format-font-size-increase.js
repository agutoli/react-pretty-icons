import React from 'react';
import iconSvg from '../icons/normalized/format-font-size-increase.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-font-size-increase" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
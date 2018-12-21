import React from 'react';
import iconSvg from '../icons/normalized/format-indent-increase.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-indent-increase" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
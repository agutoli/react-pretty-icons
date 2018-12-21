import React from 'react';
import iconSvg from '../icons/normalized/format-line-weight.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-line-weight" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
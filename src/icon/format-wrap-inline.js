import React from 'react';
import iconSvg from '../icons/normalized/format-wrap-inline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-wrap-inline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
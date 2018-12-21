import React from 'react';
import iconSvg from '../icons/normalized/format-wrap-tight.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-wrap-tight" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
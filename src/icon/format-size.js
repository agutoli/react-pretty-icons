import React from 'react';
import iconSvg from '../icons/normalized/format-size.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-size" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
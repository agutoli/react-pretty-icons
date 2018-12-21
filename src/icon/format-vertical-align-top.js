import React from 'react';
import iconSvg from '../icons/normalized/format-vertical-align-top.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-vertical-align-top" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
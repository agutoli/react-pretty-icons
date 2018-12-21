import React from 'react';
import iconSvg from '../icons/normalized/format-align-justify.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-align-justify" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
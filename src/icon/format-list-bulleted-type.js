import React from 'react';
import iconSvg from '../icons/normalized/format-list-bulleted-type.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-list-bulleted-type" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
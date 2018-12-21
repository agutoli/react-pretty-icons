import React from 'react';
import iconSvg from '../icons/normalized/format-annotation-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-annotation-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/format-annotation-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-annotation-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
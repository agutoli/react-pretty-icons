import React from 'react';
import iconSvg from '../icons/normalized/format-page-break.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-page-break" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
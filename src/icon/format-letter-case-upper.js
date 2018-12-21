import React from 'react';
import iconSvg from '../icons/normalized/format-letter-case-upper.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-letter-case-upper" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
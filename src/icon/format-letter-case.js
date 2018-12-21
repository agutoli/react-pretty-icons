import React from 'react';
import iconSvg from '../icons/normalized/format-letter-case.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-letter-case" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
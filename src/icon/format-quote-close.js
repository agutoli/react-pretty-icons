import React from 'react';
import iconSvg from '../icons/normalized/format-quote-close.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-quote-close" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
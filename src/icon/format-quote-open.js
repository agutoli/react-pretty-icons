import React from 'react';
import iconSvg from '../icons/normalized/format-quote-open.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__format-quote-open" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
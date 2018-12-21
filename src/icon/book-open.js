import React from 'react';
import iconSvg from '../icons/normalized/book-open.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__book-open" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
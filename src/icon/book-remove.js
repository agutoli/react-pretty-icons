import React from 'react';
import iconSvg from '../icons/normalized/book-remove.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__book-remove" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/book-lock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__book-lock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
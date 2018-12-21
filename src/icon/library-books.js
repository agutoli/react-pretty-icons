import React from 'react';
import iconSvg from '../icons/normalized/library-books.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__library-books" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
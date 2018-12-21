import React from 'react';
import iconSvg from '../icons/normalized/book-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__book-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
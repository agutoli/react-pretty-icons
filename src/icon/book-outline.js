import React from 'react';
import iconSvg from '../icons/normalized/book-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__book-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
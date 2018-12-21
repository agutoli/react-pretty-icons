import React from 'react';
import iconSvg from '../icons/normalized/book-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__book-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/book-multiple-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__book-multiple-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
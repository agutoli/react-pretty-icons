import React from 'react';
import iconSvg from '../icons/normalized/book-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__book-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
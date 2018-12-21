import React from 'react';
import iconSvg from '../icons/normalized/book-open-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__book-open-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
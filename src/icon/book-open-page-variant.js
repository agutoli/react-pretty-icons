import React from 'react';
import iconSvg from '../icons/normalized/book-open-page-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__book-open-page-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
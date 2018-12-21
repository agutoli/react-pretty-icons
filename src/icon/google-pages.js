import React from 'react';
import iconSvg from '../icons/normalized/google-pages.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-pages" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
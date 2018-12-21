import React from 'react';
import iconSvg from '../icons/normalized/goodreads-letter-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__goodreads-letter-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
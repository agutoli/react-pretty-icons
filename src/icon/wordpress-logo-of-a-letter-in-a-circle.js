import React from 'react';
import iconSvg from '../icons/normalized/wordpress-logo-of-a-letter-in-a-circle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wordpress-logo-of-a-letter-in-a-circle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
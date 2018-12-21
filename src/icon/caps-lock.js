import React from 'react';
import iconSvg from '../icons/normalized/caps-lock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__caps-lock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
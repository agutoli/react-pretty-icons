import React from 'react';
import iconSvg from '../icons/normalized/hulu.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hulu" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
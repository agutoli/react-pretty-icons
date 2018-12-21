import React from 'react';
import iconSvg from '../icons/normalized/google-lens.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__google-lens" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
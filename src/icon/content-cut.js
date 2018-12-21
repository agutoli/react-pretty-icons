import React from 'react';
import iconSvg from '../icons/normalized/content-cut.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__content-cut" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
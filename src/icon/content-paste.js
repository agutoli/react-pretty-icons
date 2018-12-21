import React from 'react';
import iconSvg from '../icons/normalized/content-paste.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__content-paste" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
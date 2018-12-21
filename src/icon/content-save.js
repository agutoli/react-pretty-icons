import React from 'react';
import iconSvg from '../icons/normalized/content-save.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__content-save" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
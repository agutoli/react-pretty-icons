import React from 'react';
import iconSvg from '../icons/normalized/content-copy.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__content-copy" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
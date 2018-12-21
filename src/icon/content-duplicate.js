import React from 'react';
import iconSvg from '../icons/normalized/content-duplicate.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__content-duplicate" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
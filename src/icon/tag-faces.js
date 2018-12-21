import React from 'react';
import iconSvg from '../icons/normalized/tag-faces.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tag-faces" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
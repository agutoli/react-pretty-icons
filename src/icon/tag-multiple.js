import React from 'react';
import iconSvg from '../icons/normalized/tag-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tag-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/tag-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tag-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/table-of-contents.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__table-of-contents" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
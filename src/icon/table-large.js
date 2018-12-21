import React from 'react';
import iconSvg from '../icons/normalized/table-large.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__table-large" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
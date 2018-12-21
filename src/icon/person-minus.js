import React from 'react';
import iconSvg from '../icons/normalized/person-minus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__person-minus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/odnoklassniki.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__odnoklassniki" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/store.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__store" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
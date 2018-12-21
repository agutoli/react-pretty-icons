import React from 'react';
import iconSvg from '../icons/normalized/key-change.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__key-change" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
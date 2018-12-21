import React from 'react';
import iconSvg from '../icons/normalized/donkey.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__donkey" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
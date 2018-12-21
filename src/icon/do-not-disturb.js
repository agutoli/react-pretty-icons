import React from 'react';
import iconSvg from '../icons/normalized/do-not-disturb.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__do-not-disturb" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/locker.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__locker" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
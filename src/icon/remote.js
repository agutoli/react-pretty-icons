import React from 'react';
import iconSvg from '../icons/normalized/remote.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__remote" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
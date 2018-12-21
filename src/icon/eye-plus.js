import React from 'react';
import iconSvg from '../icons/normalized/eye-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__eye-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
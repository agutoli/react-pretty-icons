import React from 'react';
import iconSvg from '../icons/normalized/opera.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__opera" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
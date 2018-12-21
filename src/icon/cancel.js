import React from 'react';
import iconSvg from '../icons/normalized/cancel.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cancel" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
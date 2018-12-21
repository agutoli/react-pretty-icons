import React from 'react';
import iconSvg from '../icons/normalized/snapchat.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__snapchat" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
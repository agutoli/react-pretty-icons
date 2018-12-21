import React from 'react';
import iconSvg from '../icons/normalized/qqchat.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__qqchat" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
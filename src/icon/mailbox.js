import React from 'react';
import iconSvg from '../icons/normalized/mailbox.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__mailbox" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
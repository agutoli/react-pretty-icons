import React from 'react';
import iconSvg from '../icons/normalized/email-mark-as-unread.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__email-mark-as-unread" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
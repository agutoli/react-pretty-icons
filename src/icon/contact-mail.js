import React from 'react';
import iconSvg from '../icons/normalized/contact-mail.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__contact-mail" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
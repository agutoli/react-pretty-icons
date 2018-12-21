import React from 'react';
import iconSvg from '../icons/normalized/contacts.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__contacts" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
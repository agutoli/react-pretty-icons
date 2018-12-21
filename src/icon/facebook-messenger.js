import React from 'react';
import iconSvg from '../icons/normalized/facebook-messenger.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__facebook-messenger" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
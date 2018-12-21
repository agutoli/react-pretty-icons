import React from 'react';
import iconSvg from '../icons/normalized/message-settings-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__message-settings-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
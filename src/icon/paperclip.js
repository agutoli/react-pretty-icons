import React from 'react';
import iconSvg from '../icons/normalized/paperclip.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__paperclip" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
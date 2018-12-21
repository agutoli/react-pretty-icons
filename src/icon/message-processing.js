import React from 'react';
import iconSvg from '../icons/normalized/message-processing.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__message-processing" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
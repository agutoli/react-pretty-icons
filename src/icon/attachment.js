import React from 'react';
import iconSvg from '../icons/normalized/attachment.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__attachment" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
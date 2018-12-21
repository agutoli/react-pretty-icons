import React from 'react';
import iconSvg from '../icons/normalized/icq-flower-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__icq-flower-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
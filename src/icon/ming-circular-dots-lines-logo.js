import React from 'react';
import iconSvg from '../icons/normalized/ming-circular-dots-lines-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ming-circular-dots-lines-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
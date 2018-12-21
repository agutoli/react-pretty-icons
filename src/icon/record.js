import React from 'react';
import iconSvg from '../icons/normalized/record.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__record" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
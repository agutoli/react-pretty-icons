import React from 'react';
import iconSvg from '../icons/normalized/stackoverflow.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__stackoverflow" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/factory.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__factory" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
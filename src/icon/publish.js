import React from 'react';
import iconSvg from '../icons/normalized/publish.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__publish" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
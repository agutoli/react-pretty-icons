import React from 'react';
import iconSvg from '../icons/normalized/human-pregnant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__human-pregnant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
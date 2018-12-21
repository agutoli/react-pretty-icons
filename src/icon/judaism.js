import React from 'react';
import iconSvg from '../icons/normalized/judaism.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__judaism" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
import React from 'react';
import iconSvg from '../icons/normalized/more.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__more" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
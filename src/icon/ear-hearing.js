import React from 'react';
import iconSvg from '../icons/normalized/ear-hearing.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ear-hearing" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
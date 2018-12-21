import React from 'react';
import iconSvg from '../icons/normalized/quality-low.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__quality-low" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
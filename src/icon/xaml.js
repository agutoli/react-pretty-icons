import React from 'react';
import iconSvg from '../icons/normalized/xaml.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__xaml" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
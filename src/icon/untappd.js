import React from 'react';
import iconSvg from '../icons/normalized/untappd.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__untappd" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
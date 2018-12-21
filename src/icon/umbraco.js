import React from 'react';
import iconSvg from '../icons/normalized/umbraco.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__umbraco" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
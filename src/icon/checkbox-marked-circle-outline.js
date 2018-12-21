import React from 'react';
import iconSvg from '../icons/normalized/checkbox-marked-circle-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__checkbox-marked-circle-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
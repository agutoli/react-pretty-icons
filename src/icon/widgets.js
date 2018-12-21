import React from 'react';
import iconSvg from '../icons/normalized/widgets.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__widgets" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
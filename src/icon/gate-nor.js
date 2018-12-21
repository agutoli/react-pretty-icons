import React from 'react';
import iconSvg from '../icons/normalized/gate-nor.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gate-nor" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
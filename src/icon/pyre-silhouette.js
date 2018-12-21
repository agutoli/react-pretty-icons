import React from 'react';
import iconSvg from '../icons/normalized/pyre-silhouette.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pyre-silhouette" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
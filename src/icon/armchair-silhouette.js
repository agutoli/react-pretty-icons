import React from 'react';
import iconSvg from '../icons/normalized/armchair-silhouette.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__armchair-silhouette" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
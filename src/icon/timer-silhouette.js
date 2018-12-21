import React from 'react';
import iconSvg from '../icons/normalized/timer-silhouette.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__timer-silhouette" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
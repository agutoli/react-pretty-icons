import React from 'react';
import iconSvg from '../icons/normalized/doorbell-video.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__doorbell-video" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
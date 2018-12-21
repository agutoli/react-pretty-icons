import React from 'react';
import iconSvg from '../icons/normalized/podcast.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__podcast" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
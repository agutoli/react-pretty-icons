import React from 'react';
import iconSvg from '../icons/normalized/cloud-search-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cloud-search-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
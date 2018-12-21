import React from 'react';
import iconSvg from '../icons/normalized/cloud-search.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cloud-search" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
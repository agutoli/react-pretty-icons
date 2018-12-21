import React from 'react';
import iconSvg from '../icons/normalized/drupal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__drupal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
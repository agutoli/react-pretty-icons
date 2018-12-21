import React from 'react';
import iconSvg from '../icons/normalized/drupal-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__drupal-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
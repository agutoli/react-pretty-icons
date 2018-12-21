import React from 'react';
import iconSvg from '../icons/normalized/slashdot-news-logo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__slashdot-news-logo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender
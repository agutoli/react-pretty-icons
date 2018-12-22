#!/usr/bin/env node

var fs = require('fs');

const normalizedIconDir = `${__dirname}/../src/icons/normalized`;
const jsIconDir = `${__dirname}/../src/icon`;

const createJsFile = (file) => {
  const jsfile = file.replace(/svg$/, 'js');
  const name = file.replace(/.svg$/, '');
  var source = '';
  source += 'import React from \'react\';\n';
  source += `import iconSvg from '../icons/normalized/${file}';\n`;
  source += `
function IconRender(props) {
  const paths = /^\\<svg [^>]+\\>(.*)<\\/svg>/ig.exec(iconSvg)[1]
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      baseProfile="full"
      viewBox="0 0 24 24"
      className={\`react-pretty-icons react-pretty-icons__${name} \$\{props.className\}\`}
      dangerouslySetInnerHTML={{__html: paths}} />
  )
}
`;
  source += `export default IconRender`;
  fs.writeFile(`${jsIconDir}/${jsfile}`, source, (err) => {
    if (err) throw err;
    console.log(`${jsIconDir}/${jsfile} created!`);
  });
};

const createStorybookFile = (files) => {
  var icons = [];
  var source = '';
  (files || []).forEach(file => {
    if (/.js$/.test(file)) return;

    const iconName = file.replace(/.svg$/, '');
    icons.push(`    <Icon name="${iconName}" />`);
  });

  source += `
  import React from 'react'
  import { storiesOf } from '@storybook/react'

  import TwitterIcon from './icon/twitter';

  storiesOf('Icon')
    .add('default', () => (
      <div>
        <style dangerouslySetInnerHTML={{__html: "svg { height: 32px; margin: 10px; }"}} />
        <TwitterIcon />
      </div>
    ));
`;

  const storybookDir = `${__dirname}/../src/`;
  fs.writeFile(`${storybookDir}/Icon.storybook.js`, source, (err) => {
    if (err) throw err;
    console.log(`storybook created!`);
  });
};

const updateReadme = (files) => {
  var icons = [];
  (files || []).forEach(file => {
    if (/.js$/.test(file)) return;
    const filename = `http://s3.amazonaws.com/${process.env.S3_BUCKET}/__react-pretty-icons__/${file}.png`;
    icons.push(`![Alt text](${filename} "${file}")`);
  });

  var source = ` . | . | . | . | . | . | . | . | . | . | . | . \n`;
    source +=  `---|---|---|---|---|---|---|---|---|---|---|---\n`;
  var count = 0;
  icons.forEach((icon) => {
      if (count < 11) {
        source += `${icon} | `;
        count++;
      } else if (count === 11) {
        source += `${icon} \n`;
        count=0;
      }
  })

  const readmeDir = `${__dirname}/../`;
  fs.readFile(`${readmeDir}/tools/templates/README.md`, "utf-8", function(err, readme) {
    fs.writeFile(`${readmeDir}/README.md`, `${readme}${source}`, (err) => {
      if (err) throw err;
      console.log(`readme created!`);
    });
  });
};

fs.readdir(normalizedIconDir, (err, files) => {
  const svgs = (files || []).filter(file => {
    return /.svg$/.test(file);
  });

  svgs.forEach(file => {
    createJsFile(file);
  });
})

fs.readdir(normalizedIconDir, (err, files) => {
  const svgs = (files || []).filter(file => {
    return /.svg$/.test(file);
  });
  updateReadme(svgs);
  createStorybookFile(svgs);
})

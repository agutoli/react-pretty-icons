#!/usr/bin/env node

var fs = require('fs');

const normalizedIconDir = `${__dirname}/../src/icons/normalized`;
const jsIconDir = `${__dirname}/../src/icons`;

const createJsFile = (file) => {
  const jsfile = file.replace(/svg$/, 'js');
  var source = '';
  source += 'import React from \'react\';\n';
  source += `import Icon from './normalized/${file}';\n`;
  source += `export default Icon;`;
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

  import Icon from './Icon';

  storiesOf('Icon')
    .add('default', () => (
      <div>
        <style dangerouslySetInnerHTML={{__html: "svg { height: 32px; margin: 10px; }"}} />
        ${icons.join('\n')}
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

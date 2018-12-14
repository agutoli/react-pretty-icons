#!/usr/bin/env node

var fs = require('fs');

const normalizedIconDir = `${__dirname}/../src/icons/normalized`;

const updateReadme = (files) => {
  if (!process.env.S3_BUCKET) {
    throw new Error('evn S3_BUCKET undefined')
  }

  var icons = [];
  var iconsNames = [];
  (files || []).forEach(file => {
    if (/.js$/.test(file)) return;
    const filename = `http://s3.amazonaws.com/${process.env.S3_BUCKET}/__react-pretty-icons__/${file}.png`;
    icons.push(`![Alt text](${filename} "${file}")`);
    iconsNames.push(file)
  });

  var source = `|   -  |   A   |   B   |   C   |   D   |   E   |   F   |\n`;
    source +=  `| :---:| :---: | :---: | :---: | :---: | :---: | :---: |\n`;

  var count = 0;
  var line = 1
  var sourceNames = ''
  icons.forEach((icon, index) => {
    var iconName = iconsNames[index].replace('.svg', '')
    if (count == 0) {
      source += `| ${line} | ${icon} | `;
      sourceNames += `| &nbsp; | ${iconName} | `;
      count++;
    } else if (count < 7) {
      source += `${icon} | `;
      sourceNames += `${iconName} | `;
      count++;
    } else if (count === 7) {
      source += `${icon} | \n`;
      sourceNames += `${iconName} | \n`;

      source += sourceNames
      line++;

      count=0;
      sourceNames = ''
    }
  })

  for (let i=0; i <= (7 - count); i++) {
    source += ' - |'
    sourceNames += ' - |'
  }

  source += "\n " + sourceNames

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
  updateReadme(svgs);
})

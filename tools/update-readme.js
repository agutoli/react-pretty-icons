#!/usr/bin/env node

var fs = require('fs');

const normalizedIconDir = `${__dirname}/../src/icons/normalized`;

const updateReadme = (files) => {
  var icons = [];
  var iconsNames = [];
  (files || []).forEach(file => {
    if (/.js$/.test(file)) return;
    const filename = `http://s3.amazonaws.com/${process.env.S3_BUCKET}/__react-pretty-icons__/${file}.png`;
    icons.push(`![Alt text](${filename} "${file}")`);
    iconsNames.push(file)
  });

  var source = `|   -  |   A   |   B   |   C   |   D   |   E   |   F   |   G   |   H   |   I   |   J   |   K   |   L   |\n`;
    source +=  `| :---:| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | \n`;
  var count = 0;
  var line = 1
  icons.forEach((icon, index1) => {
      if (count == 0) {
        source += `| ${line} | ${icon} | `;
        count++;
      } else if (count < 11) {
        source += `${icon} | `;
        count++;
      } else if (count === 11) {
        source += `${icon} | \n`;
        count=0;
        line++;

        var count2 = 0;
        iconsNames.forEach((name, index2) => {
          if (index2 <= index1) {
            var iconName = name.replace('.svg', '')
            if (count2 == 0) {
              source += `|  -  | ${iconName} | `;
              count2++;
            } else if (count < 11) {
              source += `${iconName} | `;
              count2++;
            } else if (count === 11) {
              source += `${iconName} | \n`;
              count2=0;
            }
          }
        })
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
  updateReadme(svgs);
})

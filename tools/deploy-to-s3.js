#!/usr/bin/env node

const s3 = require('s3');
const path = require('path');
const fs = require('fs');

const distDir = path.join(path.dirname(fs.realpathSync(__filename)), '../example');

const client = s3.createClient({
  s3Options: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: 'us-east-1'
  }
});

const params = {
  localDir: distDir,

  s3Params: {
    Bucket: process.env.S3_BUCKET,
    ACL: 'public-read'
  }
};

const uploader = client.uploadDir(params);

uploader.on('error', function (err) {
  console.error('unable to upload:', err.stack);
});

uploader.on('progress', function () {
  console.log('progress', uploader.progressMd5Amount,
            uploader.progressAmount, uploader.progressTotal);
});

uploader.on('end', function () {
  console.log('done uploading');
});

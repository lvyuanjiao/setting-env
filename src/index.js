import path from 'path';
import merge from 'merge';

export default (folder, fileName) => {
  const baseSetting = require(path.join(folder, fileName)); // eslint-disable-line
  let envSetting = {};
  if (process.env.NODE_ENV !== 'production') {
    envSetting = require(path.join(folder, `${fileName}.${process.env.NODE_ENV}`)); // eslint-disable-line
  }
  return merge.recursive(true, baseSetting, envSetting);
};

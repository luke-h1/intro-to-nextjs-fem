const {
  PHASE_PRODUCTION_BUILD,
  PHASE_DEVELOPMENT_SERVER,
} = require('next/constants');
module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log('IM IN DEV MODE ');
    return defaultConfig;
  }
  return defaultConfig;
};

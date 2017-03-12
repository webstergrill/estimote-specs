

'use strict';

var config = module.exports = {
  kinesis : {
    region : 'us-east-1'
  },

  estimoteTelemetryProducer : {
    stream : 'Estimotes',
    shards : 1,
    waitBetweenDescribeCallsInSeconds : 1
  }
};

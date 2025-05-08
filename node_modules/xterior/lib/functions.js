const axios = require('axios');
const fs = require('fs');

// Utility to pause execution for a specified time
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Fetch JSON data from a URL
const fetchJson = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (e) {
    throw new Error(`Fetch failed: ${e.message}`);
  }
};

// Fetch a file as a buffer
const getBuffer = async (url) => {
  try {
    const { data } = await axios.get(url, { responseType: 'arraybuffer' });
    return Buffer.from(data);
  } catch (e) {
    throw new Error(`Buffer fetch failed: ${e.message}`);
  }
};

module.exports = { sleep, fetchJson, getBuffer };

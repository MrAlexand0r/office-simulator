/**
 * Office Simulator Slack Bot!
 * - Don't forget to clean your forks after using them!
 */
require('dotenv').config();

const name    = 'Office Simulator';
const token   = process.env.API_TOKEN;
const channel = process.env.CHANNEL_ID;

var OfficeSimulator = require('./bot/office-simulator');
var officeSimulator = new OfficeSimulator({
    token: token,
    channel: channel,
    name: name
});

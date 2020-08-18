import { browser, Config } from 'protractor';
import capabilityOptions from '../capabilities';
import * as nonCiConfig from './remote.config';
import Platform = NodeJS.Platform;

const jsonReports = process.cwd() + '/reports/json';
const browserStack = require('browserstack-local');
const browserCapability = process.argv[3].split('=')[1];
const multiCapabilities = capabilityOptions[browserCapability];

const localConfig: Config = nonCiConfig.config;
if (browserCapability !== 'all') {
    localConfig.multiCapabilities = [multiCapabilities];
}

export const config = localConfig;

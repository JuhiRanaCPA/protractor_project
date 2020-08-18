// DO NOT EDIT THESE IF YOU ARE NOT MODIFYING CI CONFIGS
import { Config } from 'protractor';
import capabilityOptions from '../capabilities';
import * as nonCiConfig from './remote.config';
const browserCapability = process.env.BS_BROWSER || 'all';
const multiCapabilities = capabilityOptions[browserCapability];

const localConfig: Config = nonCiConfig.config;
if (browserCapability !== 'all') {
    localConfig.multiCapabilities = [multiCapabilities];
}

export const config = localConfig;

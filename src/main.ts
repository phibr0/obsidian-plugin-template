import { Plugin } from 'obsidian';
import { DEFAULT_SETTINGS } from './constants';
import { PluginSettings } from './types';

import "styles/styles.scss";

export default class MyPlugin extends Plugin {
	settings: PluginSettings;

	async onload() {
		await this.loadSettings();
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

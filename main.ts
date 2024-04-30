import {Plugin} from "obsidian";

export default class CrlfPlugin extends Plugin {
    onload() {
        this.registerEvent(this.app.vault.on('modify', async file => {
            await this.app.vault.process(file, data => data.replace(/(?<!\r)\n/, '\r\n'))
        }))
    }
}

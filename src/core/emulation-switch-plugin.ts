import { Platform, Plugin, setIcon } from 'obsidian';

export class EmulationSwitchPlugin extends Plugin {
    onload(): void {
        this.addCommand({
            id: 'toggle-emulation-mode',
            name: 'Toggle Mobile/Desktop Emulation',
            callback: () => this.switchModes(),
        });
        const button = this.addRibbonIcon(
            this.icon,
            `Switch to ${Platform.isMobile ? 'mobile' : 'PC'} emulation`,
            () => {
                this.switchModes();
                setIcon(button, this.icon);
            }
        );
    }

    switchModes(): void {
        // @ts-ignore
        this.app.emulateMobile(!Platform.isMobile);
    }

    get icon(): 'smartphone' | 'monitor' {
        const isMobile = Platform.isMobile;
        return isMobile ? 'smartphone' : 'monitor';
    }
}

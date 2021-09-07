import { SPFetchClient } from "@pnp/nodejs";
import { sp } from "@pnp/sp/presets/all";

export const configSP = async () => {
    sp.setup({
        sp: {
            fetchClientFactory: () => {
                return new SPFetchClient("https://devfvg.sharepoint.com/sites/Julieth3", "9bf3333e-55cc-4053-b061-e424475b52dc", "/V4HbMGVm9VB0Lgw7zTlObdKtJb9KFgvYdLsgwmbJr4=");
            },
        },
    });
}

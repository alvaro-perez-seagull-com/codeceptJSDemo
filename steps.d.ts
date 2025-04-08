/// <reference types="codeceptjs" />

declare global {
    namespace CodeceptJS {
        interface I {
            amOnPage(url: string): void;
            wait(seconds: number): void;
            // Add other methods here if needed.
        }
    }
}

export {};
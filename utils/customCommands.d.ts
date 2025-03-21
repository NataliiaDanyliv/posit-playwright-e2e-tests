// customCommands.d.ts
import { Page } from '@playwright/test';

declare module '../utils/customCommands' {
  export function login(page: Page, email: string, password: string): Promise<void>;
  export function deleteSpace(page: Page): Promise<void>;
}


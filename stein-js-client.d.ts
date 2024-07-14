declare module 'stein-js-client' {
    export default class SteinStore {
      constructor(url: string);
      append(sheetName: string, data: any[]): Promise<{ status: number }>;
      // Add other methods if needed
    }
  }
  
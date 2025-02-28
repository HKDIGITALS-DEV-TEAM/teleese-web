 export class LocalStorageManagement{

    static addToLocalStorage(elementName: string, value: string): void {
        localStorage.setItem(elementName, value);
    }

    static getFromLocalStorage(elementName: string): string | null {
        return localStorage.getItem(elementName);
    }

    static removeFromLocalStorage(elementName: string): void {
        localStorage.removeItem(elementName);
    }

 }
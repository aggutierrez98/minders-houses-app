export default class Storage {
    private static localStorage = Storage.getLocalStorage();
    private static mockLockStorage = new Map();

    private static getLocalStorage() {
        try {
            return window.sessionStorage;
        } catch {
            return undefined;
        }
    }

    static getItem(key: string) {
        if (Storage.localStorage) {
            return Storage.localStorage.getItem(key);
        }

        return Storage.mockLockStorage.get(key);
    }

    static setItem(key: string, value: string) {
        if (Storage.localStorage) {
            return Storage.localStorage.setItem(key, value);
        }

        return Storage.mockLockStorage.set(key, value);
    }

    static removeItem(key: string) {
        if (Storage.localStorage) {
            return Storage.localStorage.removeItem(key);
        }

        return Storage.mockLockStorage.delete(key);
    }
}

class PasswordGenerator {
    private static readonly LOWERCASE = "qwertyuiopasdfghjklzxcvbnm";
    private static readonly DIGITS = "0123456789";
    private static readonly SYMBOLS = "!@#$%^&*()_+=-\"№;:?[]{}/\\.,<>`~";

    public static generatePassword(
        length: number = 10,
        includeLowercase: boolean = true,
        includeUppercase: boolean = true,
        includeDigits: boolean = true,
        includeSymbols: boolean = true
    ): string {
        let allSymbols = "";

        if (includeLowercase) allSymbols += PasswordGenerator.LOWERCASE;
        if (includeUppercase) allSymbols += PasswordGenerator.LOWERCASE.toUpperCase();
        if (includeDigits) allSymbols += PasswordGenerator.DIGITS;
        if (includeSymbols) allSymbols += PasswordGenerator.SYMBOLS;

        if (allSymbols.length === 0) {
            allSymbols = PasswordGenerator.LOWERCASE + PasswordGenerator.LOWERCASE.toUpperCase();
        }

        return PasswordGenerator.generatePasswordFromSymbols(length, allSymbols);
    }

    private static generatePasswordFromSymbols(length: number, allSymbols: string): string {
        if (length <= 0) throw new Error("Length must be positive");
        if (allSymbols.length === 0) throw new Error("No symbols available");

        const randomValues = new Uint32Array(length);
        crypto.getRandomValues(randomValues);

        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = randomValues[i] % allSymbols.length;
            password += allSymbols[randomIndex];
        }

        return password.split('')
            .sort(() => 0.5 - Math.random())
            .join('');
    }
}
class PasswordGenerator
{
    lowercase = "qwertyuiopasdfghjklzxcvbnm"; 
    digits = "0123456789";
    symbols = "!@#$%^&*()_+=-\"№;:?[]{}/\\.,<>`~";
    
    generatePassword = (length = 10, includeLowercase = true, includeUppercase = true, includeDigits = true, includeSymbols = true) => {
        let  allSymbols = "";
        
        if (!includeSymbols && !includeUppercase && !includeDigits && !includeLowercase) allSymbols = Lowercase;

        if (includeLowercase) allSymbols = this.lowercase;
        if (includeUppercase) allSymbols = this.lowercase.toUpperCase();
        if (includeDigits) allSymbols = this.digits;
        if (includeSymbols) allSymbols = this.symbols;
        
        return GeneratePassword(length, allSymbols);
    }

    generatePassword = (length = 10, allSymbols) => {
        let password = "";

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allSymbols.length);
            password += allSymbols[randomIndex];
        }
        return password;
    }
}
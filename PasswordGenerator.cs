public class PasswordGenerator
{
    private const string Lowercase = "qwertyuiopasdfghjklzxcvbnm"; 
    private const string Digits = "0123456789";
    private const string Symbols = "!@#$%^&*()_+=-\"№;:?[]{}/\\.,<>`~";
    
    public string GeneratePassword(uint length, bool includeLowercase = true, bool includeUppercase = true, bool includeDigits = true, bool includeSymbols = true)
    {
        var allSymbols = "";
        allSymbols += includeLowercase switch
        {
            false when !includeUppercase => Lowercase,
            false when includeUppercase => Lowercase.ToUpper(),
            _ => Lowercase.ToLower()
        };
        
        allSymbols = includeDigits ? allSymbols + Digits : allSymbols;
        
        return GeneratePassword(length, allSymbols);
    }

    private string GeneratePassword(uint length, string allSymbols)
    {
        var password = "";
        var random = new Random();
        for (uint i = 0; i < length; i++) password += allSymbols[random.Next(0, allSymbols.Length)];
        
        return password;
    }
}
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class PasswordGenerator {
    private static final String LOWERCASE = "qwertyuiopasdfghjklzxcvbnm";
    private static final String DIGITS = "0123456789";
    private static final String SYMBOLS = "!@#$%^&*()_+=-\"№;:?[]{}/\\.,<>`~";
    private static final SecureRandom random = new SecureRandom();

    public static String generatePassword(int length, 
                                         boolean includeLowercase,
                                         boolean includeUppercase,
                                         boolean includeDigits,
                                         boolean includeSymbols) {
        
        StringBuilder allSymbols = new StringBuilder();
        
        if (includeLowercase) allSymbols.append(LOWERCASE);
        if (includeUppercase) allSymbols.append(LOWERCASE.toUpperCase());
        if (includeDigits) allSymbols.append(DIGITS);
        if (includeSymbols) allSymbols.append(SYMBOLS);
        
        if (allSymbols.length() == 0) {
            allSymbols.append(LOWERCASE).append(LOWERCASE.toUpperCase());
        }
        
        return generatePassword(length, allSymbols.toString());
    }

    private static String generatePassword(int length, String allSymbols) {
        if (length <= 0) throw new IllegalArgumentException("Length must be positive");
        if (allSymbols.length() == 0) throw new IllegalArgumentException("No symbols available");
        
        StringBuilder password = new StringBuilder(length);
        
        List<Character> passwordChars = new ArrayList<>();
        for (int i = 0; i < length; i++) {
            passwordChars.add(allSymbols.charAt(random.nextInt(allSymbols.length())));
        }

        Collections.shuffle(passwordChars);
        for (char c : passwordChars) {
            password.append(c);
        }
        
        return password.toString();
    }
}
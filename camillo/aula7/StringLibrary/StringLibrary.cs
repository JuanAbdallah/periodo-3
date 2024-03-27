using StringLibrary;

namespace UtilityLibraries;

public static class StringLibrary
{
    public static bool StartsWithUpper(this string? str)
    {
        if (string.IsNullOrWhiteSpace(str))
            return false;
        
        Soma.Executar(5,10);
        char ch = str[0];
        return char.IsUpper(ch);
    }
}
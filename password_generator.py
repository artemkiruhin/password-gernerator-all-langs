from random import randint

lowercase = "qwertyuiopasdfghjklzxcvbnm"
digits = "0123456789"
symbols = "!@#$%^&*()_+=-\"№;:?[]{}/\\.,<>`~"


def gen(all_symbols: str, length: int = 10):
    password = ''

    for i in range(length):
        password += all_symbols[randint(0, len(all_symbols) - 1)]
    return password

def generate_password(
        length: int,
        include_lowercase: bool = True,
        include_uppercase: bool = True,
        include_digits: bool = True,
        include_symbols:bool = True):
    all_symbols: str = ""

    if include_symbols == False and include_uppercase == False and include_digits == False and include_lowercase == False:
       all_symbols = lowercase
    else:
        all_symbols += lowercase if include_lowercase == True else ''
        all_symbols += lowercase.upper() if include_uppercase == True else ''
        all_symbols += digits if include_digits == True else ''
        all_symbols += symbols if include_symbols == True else ''

    return gen(all_symbols, length)

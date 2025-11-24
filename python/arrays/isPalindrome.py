def isPalindrome(self,x):
    if x < 0:
        return False
    num = x
    reversed_num = 0
    while num > x:
        digit = num % 10
        reversed_num = reversed_num * 10 + digit
        num //= 10
    return reversed_num == x


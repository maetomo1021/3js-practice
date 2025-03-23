text = """
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
"""

result = {}
for char in text:
    if (char >= 'a' and char <= 'z') or (char >= 'A' and char <= 'Z') or char == ',' or char == '.' or char == ' ':
        if char in result:
            result[char] += 1
        else:
            result[char] = 1
print(result)

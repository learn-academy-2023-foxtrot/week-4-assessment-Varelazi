# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# Method Name: even_or_odd
# Input: Number
# Output String that says even or odd
# Process: Create a method named even_or_odd. Add a conditional if statement that determined which number is even or odd. 

def even_or_odd (num)
    if num % 2 === 0
        p "#{num} is even"
    else 
        p "#{num} is odd"
    end
end
even_or_odd(reposts1)
even_or_odd(reposts2)
even_or_odd(reposts3)

p "-------------------Challenge Space"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
#Method Name: remove_vowels
#Input: String
#Output: String without vowels
#Process: Create a method called remove_vowels. Use .delete "" to delete the vowels in the string. Vowels = aeiou and AEIOU

def remove_vowels (string)
    p string.delete "AEIOU" "aeiou"
end
remove_vowels(beatles_album1)
remove_vowels(beatles_album2)
remove_vowels(beatles_album3)

p "-------------------Challenge Space"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
#Method Name: palindrome_word
#Input: String
#Output: A string interpolation - String
#Process: Create a method called palindrome_word. A conditional statement to see if a word is a palindrome. 

def palindrome_word (string)
    if string == string.reverse.capitalize
        p "#{string} is a palindrome"
    else 
        p "#{string} is not a palindrome"
    end
end
palindrome_word(palindrome_test_case1)
palindrome_word(palindrome_test_case2)
palindrome_word(palindrome_test_case3)

p "-------------------Complete!"
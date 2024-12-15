# x = int(input("Type 1 or 0"))

# if x is 0:
#     print("The bulb is off")

# elif x is 1:
#     print("The bulb is on")

# else:
#     print("Invalid Input")


str = input("enter a string")
vow= "aeiouAEIOU"
count = 0 
for i in str:
    if i in vow:
        count +=1
print(count)

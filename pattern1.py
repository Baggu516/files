# n=int(input())
# for i in range(n):
#     print(" "*(n-i-1),end="")
#     for j in range(i+1):
#         print("*",end=" ")
#     print()    
#halloww triangle
n=int(input())
for i in range(n):
    print(" "*(n-1-i),end="")
    for j in range(i+1):
        if i==0 or i==n-1 or j==0 or j==i:
            print("*",end=" ")
        else:
            print(" ",end=" ")
    print()        

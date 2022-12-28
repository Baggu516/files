n=int(input())
for i in range(n):
    print(" "*(n-1-i),end="")
    for j in range(i+1):
        if i==0 or j==0 or j==i:
            print("*",end=" ")
        else:
            print(" ",end=" ")
    print()        
for i in range(1,n):
    print(" "*(i),end="")
    for j in range(n-i):
        if i==n-1 or j==0 or j==n-1-i:
            print("*",end=" ")
        else:
            print(" ",end=" ")
    print()        
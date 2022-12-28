#..............normal method for prime numbers...........
'''k=int(input())
for i in range(2,k+1):
    c=0
    for j in range(1,i+1):
        if i%j==0:
            c+=1        
    if c==2:
        print(i,end=" ")'''
#......................alternative.......................
k=int(input())
l=[0]*(k+1)
for i in range(2,k+1):
    t=i*i
    while t<=k:
        l[t]=1
        t+=i
l[0],l[1]=1,1        
for i in range(k+1):
    if l[i]==0:
        print(i)
        

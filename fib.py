'''k=int(input())
def fibonoci(k):
    d={1:0,2:1}
    for i in range(3,k+1):
        d[i]=d[i-1]+d[i-2]
    l=[]
    for i in range(1,k+1):
        l.append(d[i])
    return l
print(*fibonoci(k))'''
k=int(input())
a=0
b=1
print(0,1,end=" ")
for i in range(k+1):
    c=a+b
    print(c,end=" ")
    a=b
    b=c


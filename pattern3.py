#n=int(input())
a=[1,4,8,54,9]
k=1
k1=1
for i in a:
    k=k^i
for i in a:
    k1=k1&i
print(k-k1)        
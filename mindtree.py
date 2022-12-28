k=input()#reading integer
def pattern(k):
    l=[]
    for i in range(len(k)):
        for j in range(i,len(k)):
            l.append(k[i:j+1])
    print(l)
    res=""
    for i in l:
        if i==i[::-1]:
            if len(res)<len(i):
                res=i
    print(res)            
            
pattern(k)  
        

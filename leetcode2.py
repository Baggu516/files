class Solution:
    def maxProfitAssignment(self, difficulty, profit, worker):
        d=difficulty
        p=profit
        w=worker
        l=[]
        for i in w:
            k=i
            while k>=min(d):
                if k in set(d):
                    l.append(k)
                    break
                k-=1
        s=0
        di={}
        for i,j in zip(d,p):
            di[i]=j
        for i in l:
            s+=di[i]
        print(l)    
        return s   
l=Solution()
print(l.maxProfitAssignment([2,4,6,8,10],
[10,20,30,40,50],
[4,5,6,7]))

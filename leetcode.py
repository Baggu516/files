class Solution:
    def largestMerge(self, word1: str, word2: str) -> str:
        m=""
        s1=word1
        s2=word2
        i=0
        j=0
        while i<len(s1) and j<len(s2):
            if s1[i]>s2[j]:
                m+=s1[i]
                i+=1
            elif s2[j]>s1[i]:
                m+=s2[j]
                j+=1
            else:
                m+=s1[i]*2
                i+=1
                j+=1
            print(i,j)
        if i==len(s1):
            m+=s2[j:]
        else:
            m+=s1[i:]
        return m
l=Solution()
print(l.largestMerge("hek","shjh"))

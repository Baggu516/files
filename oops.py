class oops:
    def __init__(self,t):
        self.__t=t
        print(t)
    def method(self):
        print(self.__t)
        

k=oops(4)
k.method()



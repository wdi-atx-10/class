from lib.animals.animal import Animal

class Cat(Animal):
    def __init__(self, name):
        super(Cat, self).__init__(name)

    def speak(self):
        print('Meooow, my name is %s' % self.name)

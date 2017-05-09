from lib.animals.animal import Animal

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(name)

    def speak(self):
        print('Woof woof, my name is %s' % self.name)

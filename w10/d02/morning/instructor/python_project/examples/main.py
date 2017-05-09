import my_module
from my_module import hello_world

def my_decorator(myFunc):
    print myFunc
    def new_function(*args):
        return args[0] + ' added from decorator'
    return new_function

@my_decorator
def my_function(arg1):
    return 'arguments are %s' % arg1

hello_world()

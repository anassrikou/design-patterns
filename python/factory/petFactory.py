from pets import Dog, Cat

def petFactory(type, name):
    if type == "dog":
        return Dog(name)
    else:
        return Cat(name)
from petFactory import petFactory

pets = dict(dog= petFactory("dog", "max"), cat= petFactory("cat", "maxy"))

def get_pet(pet):
    return pets[pet]

d = get_pet("dog")
d.speak()

c = get_pet("cat")
c.speak()

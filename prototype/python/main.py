from car import Car
from car_prototype import Prototype


c = Car()
car_proto = Prototype()
car_proto.registerObjects("car1", c)
car_clone = car_proto.clone("car1")

print(car_clone)
import copy

class Prototype:
	
	def __init__(self):
		self.objects = {}

	def registerObjects(self, name, obj):
		self.objects[name] = obj

	def unregisterObject(self, name):
		del self.objects[name]

	def clone(self, name, **kwargs):
		obj = copy.deepcopy(self.objects.get(name))
		obj.__dict__.update(kwargs)
		return obj

class Car:
	
	def __init__(self):
		self.name = "car1"
		self.color = "black"
	
	def __str__(self):
		return '{}: {}'.format(self.name, self.color)

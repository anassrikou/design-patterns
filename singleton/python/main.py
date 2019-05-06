from logger import Logger

logger_singleton = Logger(log1 = "Hello world!")

logger_singleton2 = Logger(log2 = "Hello world again!")

print(logger_singleton)
print(logger_singleton2)

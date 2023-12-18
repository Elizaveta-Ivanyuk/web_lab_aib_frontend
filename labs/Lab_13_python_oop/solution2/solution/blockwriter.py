from abc import ABC, abstractmethod

class BlockWriter(ABC):
    @abstractmethod
    def write_block(self, sheet, clients, payments):
        pass

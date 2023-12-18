from typing import Any
from dataclasses import dataclass
import json

@dataclass
class Client:
    id: int
    fio: str
    phone: str
    city: str
    email: str

    @staticmethod
    def from_dict(obj: Any) -> 'Client':
        _id = int(obj.get("id"))
        _fio = str(obj.get("fio"))
        _phone = str(obj.get("phone"))
        _city = str(obj.get("city"))
        _email = str(obj.get("email"))
        return Client(_id, _fio, _phone, _city, _email)

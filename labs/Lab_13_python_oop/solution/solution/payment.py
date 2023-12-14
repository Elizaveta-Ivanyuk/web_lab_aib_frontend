from typing import Any
from dataclasses import dataclass
import json

@dataclass
class Payment:
    id: int
    client_id: int
    amount: float
    created_at: str

    @staticmethod
    def from_dict(obj: Any) -> 'Payment':
        _id = int(obj.get("id"))
        _client_id = int(obj.get("client_id"))
        _amount = float(obj.get("amount"))
        _created_at = str(obj.get("created_at"))
        return Payment(_id, _client_id, _amount, _created_at)

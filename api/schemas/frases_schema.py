from typing import Optional
from pydantic import BaseModel as SCBaseModel

class FrasesSchema(SCBaseModel):
    id: Optional[int] = None
    quote: str
    ep_id: Optional[int] = None

# class FrasesSchemaCreate(SCBaseModel):
#     quote: str
#     ep_id: Optional[int] = None


    class Config:
        orm_mode = True


from typing import Optional
from pydantic import BaseModel as SCBaseModel

class EpisodiosSchema(SCBaseModel):
    id_episodio: Optional[int] = None
    episodio: str


    class Config:
        orm_mode = True
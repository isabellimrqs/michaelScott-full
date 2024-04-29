from core.configs import settings
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

class FrasesModel(settings.DBBaseModel):
    __tablename__ = 'frases'

    id: int = Column(Integer(), primary_key=True, autoincrement=True)
    quote: str = Column(String(500))
    ep_id: int = Column(Integer(), ForeignKey("episodios.id_episodio"))
    frase_no_episodio = relationship("EpisodiosModel", back_populates="frases", lazy='joined')





   




from core.configs import settings
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

class EpisodiosModel(settings.DBBaseModel):
    __tablename__ = 'episodios'

    id_episodio: int = Column(Integer(), primary_key=True, autoincrement=True)
    episodio: str = Column(String(500))
    frases = relationship("FrasesModel", back_populates="frase_no_episodio", lazy='joined')



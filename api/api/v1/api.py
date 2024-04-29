from fastapi import APIRouter

from api.v1.endpoints import frase, episodio

api_router = APIRouter()
api_router.include_router(frase.router, prefix="/frase", tags=["frases"])
api_router.include_router(episodio.router, prefix="/episodio", tags=["episodios"])
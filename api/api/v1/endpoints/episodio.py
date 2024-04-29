from typing import List
from fastapi import APIRouter, status, Depends, HTTPException, Response

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from models.episodios_models import EpisodiosModel
from schemas.episodios_schema import EpisodiosSchema

from core.deps import get_session

router = APIRouter()

@router.post("/", status_code=status.HTTP_201_CREATED, response_model=EpisodiosSchema)
async def post_ep(episodio: EpisodiosSchema, db: AsyncSession = Depends(get_session)):
    novo_ep = EpisodiosModel(episodio = episodio.episodio) 
    db.add(novo_ep)
    await db.commit()

    return novo_ep

@router.get("/", response_model=List[EpisodiosSchema])
async def get_eps(db: AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(EpisodiosModel)
        result = await session.execute(query)
        episodios: List[EpisodiosModel] = result.unique().scalars().all()

        return episodios
    
@router.get("/{ep_id}", response_model=EpisodiosSchema, status_code=status.HTTP_200_OK)
async def get_ep(ep_id: int, db: AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(EpisodiosModel).filter(EpisodiosModel.id_episodio == ep_id)
        result = await session.execute(query)
        episodio = result.unique().scalar_one_or_none()

        if episodio:
            return episodio
        else:
            raise HTTPException(detail="Episódio não encontrado", status_code=status.HTTP_404_NOT_FOUND)
        
@router.put("/{ep_id}", response_model=EpisodiosSchema, status_code=status.HTTP_202_ACCEPTED)
async def put_ep(ep_id: int, episodio: EpisodiosSchema, db: AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(EpisodiosModel).filter(EpisodiosModel.id_episodio == ep_id)
        result = await session.execute(query)
        ep_up = result.unique().scalar_one_or_none()

        if ep_up:
            ep_up.episodio = episodio.episodio

            await session.commit()
            return ep_up
        
        else:
            raise HTTPException(detail="Episódio não encontrado", status_code=status.HTTP_404_NOT_FOUND)
        
@router.delete("/{ep_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_ep(ep_id: int, db: AssertionError = Depends(get_session)):
    async with db as session:
        query = select(EpisodiosModel).filter(EpisodiosModel.id_episodio == ep_id)
        result = await session.execute(query)
        ep_del = result.unique().scalar_one_or_none()

        if ep_del:
            await session.delete(ep_del)
            await session.commit()
            return Response(status_code=status.HTTP_204_NO_CONTENT)
        else:
            raise HTTPException(detail="Frase não encontrada", status_code=status.HTTP_404_NOT_FOUND)


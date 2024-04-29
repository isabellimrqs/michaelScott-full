from typing import List
from fastapi import APIRouter, status, Depends, HTTPException, Response

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from models.frases_models import FrasesModel
from schemas.frases_schema import FrasesSchema

from core.deps import get_session

router = APIRouter()

@router.post("/", status_code=status.HTTP_201_CREATED, response_model=FrasesSchema)
async def post_frase(frase: FrasesSchema, db: AsyncSession = Depends(get_session)):
    nova_frase = FrasesModel(quote = frase.quote, ep_id = frase.ep_id) 
    db.add(nova_frase)
    await db.commit()

    return nova_frase

@router.get("/", response_model=List[FrasesSchema])
async def get_frases(db: AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(FrasesModel)
        result = await session.execute(query)
        frases: List[FrasesModel] = result.unique().scalars().all()

        return frases

@router.get("/{frase_id}", response_model=FrasesSchema, status_code=status.HTTP_200_OK)
async def get_frase(frase_id: int, db: AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(FrasesModel).filter(FrasesModel.id == frase_id)
        result = await session.execute(query)
        frase = result.unique().scalar_one_or_none()

        if frase:
            return frase
        else:
            raise HTTPException(detail="Frase não encontrada", status_code=status.HTTP_404_NOT_FOUND)

@router.put("/{frase_id}", response_model=FrasesSchema, status_code=status.HTTP_202_ACCEPTED)
async def put_frase(frase_id: int, frase: FrasesSchema, db: AsyncSession = Depends(get_session)):
    async with db as session:
        query = select(FrasesModel).filter(FrasesModel.id == frase_id)
        result = await session.execute(query)
        frase_up = result.unique().scalar_one_or_none()

        if frase_up:
            frase_up.quote = frase.quote

            await session.commit()
            return frase_up
        
        else:
            raise HTTPException(detail="Frase não encontrada", status_code=status.HTTP_404_NOT_FOUND)
        
@router.delete("/{frase_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_frase(frase_id: int, db: AssertionError = Depends(get_session)):
    async with db as session:
        query = select(FrasesModel).filter(FrasesModel.id == frase_id)
        result = await session.execute(query)
        frase_del = result.unique().scalar_one_or_none()

        if frase_del:
            await session.delete(frase_del)
            await session.commit()
            return Response(status_code=status.HTTP_204_NO_CONTENT)
        else:
            raise HTTPException(detail="Frase não encontrada", status_code=status.HTTP_404_NOT_FOUND)
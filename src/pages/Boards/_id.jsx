import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
// import {mockData} from '~/apis/mock-data'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsApi, createNewColumnApi, createNewCardApi } from '~/apis'

function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    //react-router-dom
    const boardId = '65d33fefb696d387750ab44e'
    fetchBoardDetailsApi(boardId).then( board => {
      setBoard(board)
    })
  }, [])

  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnApi({
      ...newColumnData,
      boardId: board._id
    })
  }

  const createNewCard = async (newCardData) => {
    const createdCard = await createNewCardApi({
      ...newCardData,
      boardId: board._id
    })
  }

  return (
    <Container disableGutters maxWidth = {false} sx={{ height: '100vh' }}>
      <AppBar/>
      <BoardBar board = { board }/>
      <BoardContent
        board = { board }
        createNewColumn = { createNewColumn }
        createNewCard = {createNewCard}
      />
    </Container>
  )
}

export default Board
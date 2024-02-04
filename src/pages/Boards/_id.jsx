import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
// import {mockData} from '~/apis/mock-data'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsApi } from '~/apis'

function Board() {
  const [board, setBoard] = useState(null)

  useEffect(()=> {
    //react-router-dom
    const boardId = '65c01212a563c53691dfe9f7'
    fetchBoardDetailsApi(boardId).then( board => {
      setBoard(board)
    })
  }, [])

  return (
    <Container disableGutters maxWidth = {false} sx={{ height: '100vh' }}>
      <AppBar/>
      <BoardBar board = { board }/>
      <BoardContent board = { board }/>
    </Container>
  )
}

export default Board
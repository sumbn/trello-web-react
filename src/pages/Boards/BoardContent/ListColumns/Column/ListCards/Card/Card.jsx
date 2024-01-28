import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React from 'react'
import Button from '@mui/material/Button'
import {Card as MuiCard} from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function Card() {
  return (
    <MuiCard sx={{
      cursor:'pointer',
      boxShadow:'0 1px 1px rgpa( 0, 0, 0, 0.2)',
      overflow:'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbNHzOTGHradGvfIzacG6Eo-TPLqFAFFoIw&usqp=CAU"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, '&:last-child':{ p: 1.5 } }}>
        <Typography >Sum bui</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button startIcon={<GroupIcon/>} size="small" >20</Button>
        <Button startIcon={<CommentIcon/>} size="small" >15</Button>
        <Button startIcon={<AttachmentIcon/>} size="small" >10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
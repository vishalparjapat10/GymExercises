import React from 'react';
import {Box} from '@mui/material'

const HorizontalScrollBar = ({data}) => {
  return (
    <div>
        {
            data.map((item) => (
                <Box 
                    key={item.id}
                    itemId={item.id}
                    title={item.id}
                    m="0 40px"
                >
                    {item}
                </Box>
            ))
        }
    </div>
  )
}

export default HorizontalScrollBar
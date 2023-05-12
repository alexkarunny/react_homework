import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                width: 150,
                '& .MuiSlider-thumb': {
                    display: 'inline-block',
                    boxSizing: 'border-box',
                    width: 18,
                    height: 18,
                    border: '1px solid #00CC22',
                    backgroundColor: '#fff',
                },
                '& .MuiSlider-thumb::after': {
                    width: 6,
                    height: 6,
                    backgroundColor: '#00CC22',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

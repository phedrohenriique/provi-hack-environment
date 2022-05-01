import React from 'react'
import {
    Box,
    Text,
    Progress,
    Button,
    color
} from '@chakra-ui/react'
import ProgressDiscount from './ProgressDiscount'
import DiscountCard from '../DiscountCard'

export default function UserInterface({ name }) {

    let [progress, setProgress] = React.useState(0)
    let [discounts, setDiscounts] = React.useState([1])
    // sets states to all items of array discounts and add value
    const discountHandler = (value)=>{
        setDiscounts([...discounts, value])
    }

    if (progress > 100) {
        console.log(discounts);
        discountHandler(1);
        setProgress(0);
        console.log(discounts);
    }


    return (
        <>
            <Box display={'flex'} flexDirection={'column'} gap={3}>
                <ProgressDiscount name={name} value={progress} />
                <Box display={'flex'} flexDirection={'row'} gap={5}>
                    <Button>Categoria 1</Button>
                    <Button>Categoria 2</Button>
                    <Button colorScheme={'blue'} onClick={() => { setProgress(progress + 5) }}>Donation</Button>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={3}>
                    {discounts.map(()=>{ return <DiscountCard />})}
                </Box>
            </Box>
        </>
    )
}

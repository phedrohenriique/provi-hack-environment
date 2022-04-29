import React from 'react'
import BlueButton from '../../components/Button/BlueButton'
import GreenButton from '../../components/Button/GreenButton'
import RegisterCard from '../../components/registercard'

export default function TestComponents() {
    return (
        <>
        <BlueButton text='button' link='http://localhost:3000'></BlueButton>
        <GreenButton text={'button'}></GreenButton>
        </>
    )
}

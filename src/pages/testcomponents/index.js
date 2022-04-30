import React from 'react'
import InstitutionCard from '../../components/InstitutionCard'
import RegisterCardUser from '../../components/RegisterCardUser'
import SearchCardInstitution from '../../components/SearchCardInstitution'
import UserInterface from '../../components/UserInterface'

export default function TestComponents() {
    const title = 'Nome da instituição'
    const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries  lorem50'

    return (
        <>
            <UserInterface name={'Bruxo'} />
            <InstitutionCard title={title} description={description} />
        </>
    )
}

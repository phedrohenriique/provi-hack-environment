import React from 'react'

export default function LocalStorage() {

    const users = [{
        name: 'Pedro',
        email: 'pedro@gmail.com',
        password: '123',
        login: false
      },
      {
        name: 'Alison',
        email: 'alisson@gmail.com',
        password: '123',
        login: false
      },
      {
        name: 'Rafael',
        email: 'rafael@gmail.com',
        password: '123',
        login: false
      },
    ]
    
      React.useEffect(()=>{
      // inside here userData is another variable
      localStorage.setItem('users', JSON.stringify(users));
  
      },[])

  return (
    <>LocalStorage</>
  )
}

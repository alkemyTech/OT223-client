import React from 'react'
import BackOfficeCard from '../BackofficeCard'
import styles from './listofbackofficecards.module.css'

const items = [
  {
    name: 'Novedades',
    path: 'news'
  },
  {
    name: 'Actividades',
    path: 'activities'
  },
  {
    name: 'Categorías',
    path: 'categories'
  },
  {
    name: 'Testimonios',
    path: 'testimonies'
  },
  {
    name: 'Organización',
    path: 'organization'
  },
  {
    name: 'Slides',
    path: 'slides'
  },
  {
    name: 'Usuarios',
    path: 'users'
  },
  {
    name: 'Miembros',
    path: 'members'
  }
]

function ListOfBackofficeCards() {
  return (
    <div className={styles.cardsContainer}>
      {
        items.map(item => (
          <BackOfficeCard
            name={item.name}
            icon={item.icon}
            path={item.path}
            key={item.name}
          />
        ))
      }
    </div>
  )
}

export default ListOfBackofficeCards
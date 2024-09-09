'use client'
import { GetOrganizationApiResponse } from '@/type/strapi/getOrganizationApiResponse'
import Image from 'next/image'
import Link from 'next/link'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

import React, { FC, useEffect, useState } from 'react'

function Page() {
  // const { id } = params

  // const [organization, setOrganization] = useState<GetOrganizationApiResponse>()
  // const [isLoading, setIsLoading] = useState(true)

  // const getOrganization = async () => {
  //   const response = await fetch(
  //     `http://localhost:1337/api/organizations/${id}?populate=*`
  //   )
  //   const data = await response.json()
  //   setOrganization(data)
  //   setIsLoading(false)
  // }

  // useEffect(() => {
  //   getOrganization()
  // })

  return (
    <div className="max-container">
      <div className="">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1joe4EpsfKlVY2m51umJxvLwRWfFRR9VU2A&s"
          alt=""
          width={500}
          height={500}
        />
        <div className="container pt-4">
          <div className="flex justify-between">
            <p className="bold-16">Repairs</p>
            <Link
              href={`https://www.repairs75.org/repairs-cest-quoi.html`}
              target="blank"
              className="bold-16"
            >
              Voir leur site
            </Link>
          </div>
          <p>
            Repairs est une communauté d'entraide qui rassemble des personnes
            d'horizons divers mais ayant en commun d'avoir vécu une situation de
            placement durant leur enfance. Créée en 2015 à Paris par des jeunes
            tous juste sortis de l’Aide Sociale à l’Enfance, Repairs est présent
            dans 8 départements et rêve d'une société dans laquelle les enfants
            placés d'aujourd'hui seraient tous promis à devenir les adultés
            épanouis et émancipés de demain.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page

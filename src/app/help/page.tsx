'use client'
import './style.css'

import CustomButton from '@/components/CustomButton'
import React, { useEffect, useState } from 'react'
import { GetOrganizationsApiResponse } from '@/type/strapi/getOrganizationsApiResponse'
import Image from 'next/image'
import Link from 'next/link'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { toast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'
import { getIssuesApiResponse } from '@/type/strapi/getIssuesApiResponse'
import { getRegionsApiResponse } from '@/type/strapi/getRegionsApiResponse'
import Navbar from '@/components/NavBar'

const FormSchema = z.object({
  issueId: z.string({
    required_error: 'Veuillez sélectionner un problème'
  }),
  region: z.string({
    required_error: 'Veuillez sélectionner une région'
  })
})

type organizationMockType = {
  name: string
  PhotoUrl: string
  id: string
}

export default function Page() {
  const [organizations, setOrganizations] =
    useState<GetOrganizationsApiResponse>()

  const organizationMock: organizationMockType[] = [
    {
      id: '1',
      name: 'Repairs',
      PhotoUrl:
        'https://www.loire-atlantique.fr/upload/docs/image/jpeg/2021-03/repairs44.jpg.associated/th-930x620-repairs44.jpg.jpg'
    },
    {
      id: '2',
      name: 'La base',
      PhotoUrl:
        'https://www.la-base.org/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Fresize%3Dwidth%3A775%2Foutput%3Dformat%3Ajpg%2F9IVnbasKTFWhX6QT1Qfc&w=3840&q=75'
    },
    {
      id: '3',
      name: "les clés de l'école",
      PhotoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYOr_J58idFSwlpgEdHsyhMSSfdWiXGCtgFw&s'
    },
    {
      id: '4',
      name: 'Point-justice - Amicale du Nid de ParisÀ',
      PhotoUrl:
        'https://amicaledunid.org/wp-content/uploads/2019/11/Guide-osons-en-parler.jpg'
    },
    {
      id: '5',
      name: " Centre d'information sur les droits des femmes et des familles",
      PhotoUrl:
        'https://www.grandperigueux.fr/fileadmin/medias/Annuaire_des_associations/grandperigueux_logo_cidff.jpg'
    },
    {
      id: '6',
      name: 'France Services - Gagny - Jacques-Préve',
      PhotoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHDIQlaQ2Uk_2JFhE3cBVSyEedRSKjaY9MTg&s'
    }
  ]

  const [issues, setIssues] = useState<getIssuesApiResponse>()
  const [regions, setRegions] = useState<getRegionsApiResponse>()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  useEffect(() => {
    getOrganizations()
    getIssues()
    getRegions()
  }, [])

  async function getOrganizationsByIssue(issueId: string) {
    try {
      const response = await fetch(
        `http://localhost:1337/api/issues/${issueId}?populate=*`
      )
      if (!response.ok) {
        // Gestion des réponses d'erreur de l'API
        throw new Error(`API call failed with status ${response.status}`)
      }

      const data = await response.json()
      const issueTags = data.data.attributes.tags.data.map(item => item.id)
      console.log(issueTags)

      //Récupérer toutes les associations avec ces tags
    } catch (error) {}
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    getOrganizationsByIssue(data.issueId)
  }

  const getOrganizations = async () => {
    const response = await fetch(
      'http://localhost:1337/api/organizations?populate=*'
    )
    const data = await response.json()
    setOrganizations(data)
  }

  const getIssues = async () => {
    const response = await fetch('http://localhost:1337/api/issues?populate=*')
    const data = await response.json()
    setIssues(data)
  }

  const getRegions = async () => {
    const response = await fetch('http://localhost:1337/api/regions?populate=*')
    const data = await response.json()
    setRegions(data)
  }

  return (
    <div>
      <section className="">
        <div className="hero-search-section lg:h-[50rem] bg-[url('/help-background.png')] bg-no-repeat">
          <div className="max-container h-[100%] ">
            <div className=""></div>
            <div className=" flex justify-end items-center h-[50%]">
              <div className="hero-search-section-item-content">
                <h2 className="bold-40 lg:bold-40 text-gray-10">
                  Trouver de l’aide devrait <br /> être + accessible
                </h2>
                <p className="regular-16 mt-6 text-gray-10 xl:max-w-[520px]">
                  Trouve des associations qui peuvent d’aider en fonction de tes
                  problèmes
                </p>
                <div className="flex w-full gap-3 sm:flex-row mt-6">
                  <CustomButton
                    title="Trouver maintenant"
                    type="button"
                    variant="btn_white"
                  />
                </div>
              </div>
            </div>
            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-[50%] space-x-6 flex items-center bg-white"
                >
                  <FormField
                    control={form.control}
                    name="issueId"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Quelle est ta cituation ?" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {issues?.data.map(issue => (
                              <SelectItem key={issue.id} value={`${issue.id}`}>
                                {issue.attributes.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="region"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Quelle est ta région" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {regions?.data.map(region => (
                              <SelectItem
                                key={region.id}
                                value={region.attributes.name}
                              >
                                {region.attributes.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Qui peut m'aider ?</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        <div className="max-container flex justify-between organizations-section flex-wrap ">
          {organizationMock?.map(organization => (
            <Link
              key={organization.id}
              href={`/organization/${organization.id}`}
            >
              <div key={organization.id} className="organization-item">
                <Image
                  src={organization.PhotoUrl}
                  alt={organization.PhotoUrl}
                  width={400}
                  height={400}
                />
                <p>{organization.name}</p>
                <Link href={`/organization/${organization.id}`}>Voir</Link>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

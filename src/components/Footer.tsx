import React from 'react'
import vector1 from '../assets/Vector-1.png'
import vector2 from '../assets/Vector-2.png'
import vector3 from '../assets/Vector-3.png'
import vector4 from '../assets/Vector-4.png'
import Image from 'next/image'

import './index.css'

export default function Footer() {
  return (
    <footer className="flex h-[200px] justify-center items-center border-t border-neutral-700/80">
      <div className="container flex justify-between footer-item-section">
        <div className="logo-section">VIT+</div>
        <div className="inscription-section">
          <p className="font-[10px]">Recevez nos infos par mail</p>
          <p className="pb-5">
            Pour être alerté lors de la parution des magazines ou recevoir
            l’actu selon mes centres d’intérêts
          </p>
          <button className=" py-3 px-3 border rounded-md border-l-black">
            Je m’abonne
          </button>
        </div>
        <div className="follow-section flex flex-col items-end">
          <div className="flex flex-col items-center justify-center">
            <p className="py-2">Suivez-nous sur les réseaux sociaux :</p>
            <div className="social-icon flex gap-5 items-center">
              <a href="">
                <Image src={vector1} alt="" />
              </a>
              <a href="">
                <Image src={vector2} alt="" />
              </a>
              <a href="">
                <Image src={vector3} alt="" />
              </a>
              <a href="">
                <Image src={vector4} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

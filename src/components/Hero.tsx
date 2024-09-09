import './index.css'
import Image from 'next/image'
import backdrop from '../assets/backdrop.png'

export default function HeroSection() {
  const videos = [
    {
      photoUrl:
        'https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      photoUrl:
        'https://i.ytimg.com/vi/9NkcSBtB2hM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCy6Lti8SNbpQCbZ2tfWGGEomRCTg'
    },
    {
      photoUrl:
        'https://i.ytimg.com/vi/4koCeC5Oj7A/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6AEcSPDWNrVQOf_DeIj538_gzOg'
    },
    {
      photoUrl:
        'https://i.ytimg.com/vi/iobgA5nIwb8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDtBfJ5H-ciUj6xh9QU8YI_6H2I4g'
    },
    {
      photoUrl:
        'https://i.ytimg.com/vi/tQbZnn6FPxg/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARg5IDUofzAP&rs=AOn4CLDSrq-rt4uexUlxTzrAuGGRIV2FOg'
    },
    {
      photoUrl:
        'https://i.ytimg.com/vi/tQbZnn6FPxg/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARg5IDUofzAP&rs=AOn4CLDSrq-rt4uexUlxTzrAuGGRIV2FOg'
    },
    {
      photoUrl:
        'https://i.ytimg.com/vi/tQbZnn6FPxg/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARg5IDUofzAP&rs=AOn4CLDSrq-rt4uexUlxTzrAuGGRIV2FOg'
    },
    {
      photoUrl:
        'https://i.ytimg.com/vi/tQbZnn6FPxg/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARg5IDUofzAP&rs=AOn4CLDSrq-rt4uexUlxTzrAuGGRIV2FOg'
    }
  ]

  return (
    <div>
      <div className=" hero-section flex flex-col justify-center min-h-[700px]">
        <div className="container hero-section-content  px-4 mx-auto relative text-sm flex items-center">
          <div className="hero-item hero-item-1">
            <h1 className="text-4xl sm:text-6xl  tracking-wide pb-3 font-[650] lg:bold-88">
              Vidéos, informations, transmissions et +
            </h1>

            <p className="text-justify w-[450px] regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
              Vit+ est une association qui utilise le pouvoir du numérique pour
              offrir un soutien crucial aux jeunes de 12 à 25 ans placés en
              foyers ou familles d'accueil. Notre mission est de leur fournir un
              espace où ils peuvent s'exprimer, trouver du soutien, s'informer
              et s'épanouir. Pour ce faire, nous avons créé une chaine YouTube,
              un site web et nous organisons des ateliers vidéos dans les
              foyers.
            </p>
          </div>
          <div className="hero-item hero-item-2">
            <div>
              <div className="image-backgrop-container">
                <Image src={backdrop} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="discover-section container pt-10  relative text-sm text-center flex flex-col items-center justify-center mx-auto">
        <div className="py-10  min-h-[300px]">
          <h2 className="text-[40px] tracking-wide pb-1 font-[600] lg:bold-88 leading-[45px]">
            Découvrez les retours <br /> d’expériences
          </h2>
          <p className="text-center w-[430px] regular-16 mt-6 text-gray-30 xl:max-w-[520px  ">
            Découvrez le retour d'expérience de jeunes ayant vécu la même
            situation que vous. Malgré les difficultés, aujourd'hui, ils s'en
            sont sortis.
          </p>
        </div>

        <div className="overflow-x-auto whitespace-nowrap mb-[150px]">
          <div className="flex">
            {videos.map(item => (
              <div
                key={item.photoUrl}
                className="h-[400px] bg-pink-500 flex-shrink-0 mr-4 inline-block"
              >
                <Image
                  src={item.photoUrl}
                  alt=""
                  className="h-full w-full object-cover"
                  height={500}
                  width={500}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

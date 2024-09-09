import React from 'react'

function Guide() {
  return (
    <section className="flexCenter flex-col py-10">
      <div className="padding-container max-container w-full pb-24">
        <div className="flew flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-32 lg:bold-64 mt-1 mb-3 lx:max-w-[390px]">
            Problématique
          </h2>
          <p className="regular-16 mt-1 mb-3 text-gray-30 xl:max-w-[520px]">
            Le problème, ce n’est pas l’aide, le problème, c’est de trouver
            l’aide le plus rapidement quand on a besoin.. Built on web standards
            with zero- config TypeScript, unmatched security, and a complete
            built-in toolchain, Deno is the easiest, most productive way to
            JavaScript.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Guide

const HomeLayout = () => {
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 h-[90vh] flex justify-center items-center">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-dark text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
            eco
            <span className="bg-clip-text bg-gradient-to-tl from-secondary to-primary text-transparent">
              Horizon
            </span>
          </h1>
        </div>

        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-grayish dark:text-neutral-400 hover:text-dark transition duration-200 ease-in-out">
            Ez a weboldal a fenntarthatósággal, környezetvédelemmel és zöld
            technológiákkal foglalkozik. Célja, hogy inspirációt és tudást
            nyújtson azoknak, akik szeretnének fenntarthatóbban élni, illetve
            megismerkednének új, környezetbarát technológiákkal és
            megoldásokkal.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeLayout

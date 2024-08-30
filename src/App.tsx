import React from 'react'

export default function App() {
  return (
    <div>
      <body className="dark:bg-neutral-900 ">

        <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
          <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
            <div className="px-4 md:px-0 flex justify-between items-center">

              <div>
                <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="../../templates/personal/index.html" aria-label="Mateus data">
                mateus_dev
                </a>
              </div>


              <div className="md:hidden">

                <button type="button" className="hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-navbar-header-floating-collapse" aria-expanded="false" aria-controls="hs-navbar-header-floating" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-header-floating">
                  <svg className="hs-collapse-open:hidden shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>

              </div>
            </div>

            <div id="hs-navbar-header-floating" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-header-floating-collapse">
              <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
                <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 focus:outline-none dark:border-neutral-200 dark:text-neutral-200" href="#" aria-current="page">Home</a>
                <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Projetos</a>
                <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Work</a>
                <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Pesquisas</a>
              </div>
            </div>
          </nav>
        </header>



        <main id="content">
          <div className="w-full max-w-2xl mx-auto pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">

            <div className="flex items-center gap-x-3">
              <div className="shrink-0">
                <img className="shrink-0 size-16 rounded-full" src="https://avatars.githubusercontent.com/u/54743403?v=4" alt="Avatar" />
              </div>

              <div className="grow">
                <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
                  Mateus dos Santos Silva
                </h1>
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                Desenvolvedor Web e Mobile
                </p>
              </div>
            </div>



            <div className="mt-8">
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Sou um programador com mais de 2 anos de experiência no desenvolvimento de aplicações web e mobile, bem como em backend. Minha expertise inclui a criação de soluções tecnológicas completas, desde o design de interfaces até a implementação de sistemas robustos e escaláveis. Ajudando clientes a transformar suas ideias em realidade digital, sempre focado em entregar soluções que atendam às suas necessidades e superem suas expectativas.
              </p>

              <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
                Atualmente, trabalho como desenvolvedor backend no Nubank, onde estou envolvido no projeto Inovar para Pessoas Negras. Faço parte de uma iniciativa que visa criar soluções tecnológicas inovadoras e inclusivas, contribuindo para a transformação digital e o empoderamento da comunidade negra.
              </p>

              <ul className="mt-5 flex flex-col gap-y-3">
                <li className="flex items-center gap-x-2.5">
                  <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                    mateuspele2015@gmail.com
                  </a>
                </li>

                <li className="flex items-center gap-x-2.5">
                  <svg className="shrink-0 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1881 10.1624L22.7504 0H20.7214L13.2868 8.82385L7.34878 0H0.5L9.47944 13.3432L0.5 24H2.5291L10.3802 14.6817L16.6512 24H23.5L14.1881 10.1624ZM11.409 13.4608L3.26021 1.55962H6.37679L20.7224 22.5113H17.6058L11.409 13.4613V13.4608Z" fill="currentColor" />
                  </svg>
                  <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                    @mateusdata
                  </a>
                </li>

                <li className="flex items-center gap-x-2.5">
                  <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                    <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                    <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                  </svg>
                  <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                    @mateus.data
                  </a>
                </li>
              </ul>
            </div>



            <div className="mt-10 sm:mt-14">
              <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
                Projetos
              </h2>


              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <a className="group block relative overflow-hidden rounded-lg" href="#">
                  <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://us-wd.gr-cdn.com/blog/sites/5/2023/07/1500/exemplo-de-site-de-saas-getresponse-1.webp" alt="Project" />
                  <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                    <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                      <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                      <span className="text-xs">Visualizar</span>
                    </div>
                  </div>
                </a>

                <a className="group block relative overflow-hidden rounded-lg" href="#">
                  <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project" />
                  <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                    <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                      <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                      <span className="text-xs">Visualizar</span>
                    </div>
                  </div>
                </a>

                <a className="group block relative overflow-hidden rounded-lg" href="#">
                  <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project" />
                  <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                    <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                      <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                      <span className="text-xs">Visualizar</span>
                    </div>
                  </div>
                </a>

                <a className="group block relative overflow-hidden rounded-lg" href="#">
                  <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1707760696486-2a2cd7e0b6a6?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project" />
                  <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                    <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                      <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                      <span className="text-xs">Visualizar</span>
                    </div>
                  </div>
                </a>

                <a className="group block relative overflow-hidden rounded-lg" href="#">
                  <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1585159812596-fac104f2f069?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project" />
                  <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                    <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                      <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                      <span className="text-xs">Visualizar</span>
                    </div>
                  </div>
                </a>

                <a className="group block relative overflow-hidden rounded-lg" href="#">
                  <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1654131300276-db70adf4f85d?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project" />
                  <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                    <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                      <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                      <span className="text-xs">Visualizar</span>
                    </div>
                  </div>
                </a>
              </div>

            </div>



            <div className="mt-10 sm:mt-14">
              <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
                Testemunhas
              </h2>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 border-y border-gray-200 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                <div className="sm:-ms-4 py-6 sm:px-4">

                  <blockquote>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">Estou absolutamente impressionado com o nível de cuidado e atenção aos detalhes que Mateus colocou neste projeto e posso garantir que seremos clientes recorrentes.</span>

                    <footer className="mt-3">
                      <div className="flex items-center gap-x-2">
                        <img className="shrink-0 size-5 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                        <div className="grow">
                          <div className="text-xs text-gray-500 dark:text-neutral-500">Josh Grazioso</div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>

                </div>

                <div className="py-6 sm:px-4">

                  <blockquote>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">Dizer que contratar Mateus mudou minha vida é pouco. Meu negócio triplicou e recuperei minha vida.</span>

                    <footer className="mt-3">
                      <div className="flex items-center gap-x-2">
                        <img className="shrink-0 size-5 rounded-full" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                        <div className="grow">
                          <div className="text-xs text-gray-500 dark:text-neutral-500">Flavia Lima</div>
                        </div>
                      </div>
                    </footer>
                  </blockquote>

                </div>
              </div>

            </div>



            <div className="my-10 sm:my-14">
              <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
                Skills
              </h2>


              <div className="space-y-3">
                <dl className="flex flex-col sm:flex-row gap-1">
                  <dt className="min-w-40">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500">Design Tools:</span>
                  </dt>
                  <dd>
                    <ul>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <svg className="shrink-0 size-4 me-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                          <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                          <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                          <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                          <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                        </svg>
                        Figma
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <svg className="shrink-0 size-4 me-1" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0597 0.32329C11.02 0.31932 10.98 0.31932 10.9403 0.32329L5.3403 0.883285C5.17075 0.900245 5.0164 0.988485 4.91578 1.126L0.119634 7.68074C0.0464736 7.77832 0.00235197 7.89893 9.11713e-05 8.02973C3.03713e-05 8.03325 0 8.03679 0 8.04031L4.76837e-06 8.04274C0.000580768 8.18808 0.0528336 8.32124 0.139339 8.42477L10.5367 21.0616C10.6506 21.2001 10.8206 21.2803 11 21.2803C11.1794 21.2803 11.3494 21.2001 11.4633 21.0616L21.8606 8.42479C21.9472 8.32125 21.9994 8.18808 22 8.04274V8.03301C21.9998 8.0237 21.9995 8.0144 21.999 8.00511C21.992 7.8838 21.949 7.77216 21.8803 7.68072L17.0842 1.126C16.9835 0.988485 16.8293 0.900245 16.6597 0.883285L11.0597 0.32329ZM16.48 7.44031V7.40407L16.4757 7.44031H16.48ZM16.4947 7.28026H20.1003L16.9992 3.04205L16.4947 7.28026ZM15.9131 2.01461L11.8709 1.61039L15.2795 7.33684L15.9131 2.01461ZM10.1291 1.61039L6.0869 2.01461L6.7205 7.33684L10.1291 1.61039ZM5.00074 3.04205L1.89962 7.28026H5.50528L5.00074 3.04205ZM1.87066 8.64031L9.81378 18.2942L5.75794 8.70733C5.74859 8.68525 5.74102 8.66285 5.73518 8.64031H1.87066ZM7.24088 8.64031L11 18.3739L14.7591 8.64031H7.24088ZM16.2648 8.64031C16.259 8.66285 16.2514 8.68525 16.2421 8.70733L12.1862 18.2942L20.1293 8.64031H16.2648ZM11 2.49337L13.9446 7.44031H8.05539L11 2.49337Z" fill="currentColor" />
                        </svg>
                        Sketch
                      </li>
                    </ul>
                  </dd>
                </dl>

                <dl className="flex flex-col sm:flex-row gap-1">
                  <dt className="min-w-40">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500">Development:</span>
                  </dt>
                  <dd>
                    <ul>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <svg className="shrink-0 size-4 me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.41014 21.6082L1.5 0H22.5L20.5899 21.5965L11.9826 24" fill="currentColor" />
                          <path d="M12.5 22V2H20.5L18.9734 20.083" fill="currentColor" />
                          <path d="M5.5 4H12.5V6.64672H8.55789L8.81579 9.35756H12.5V11.9984H6.2614M6.38421 13.3276H9.18421L9.3807 15.4438L12.5 16.2367V19L6.77719 17.4843" fill="white" fill-opacity="0.8" />
                          <path d="M18.5 4H12.5V6.64877H18.2786M18.0624 9.36173H12.5V12.0105H15.4525L15.1731 15.4527L12.5 16.2462V19L17.4033 17.4948" fill="white" />
                        </svg>
                        HTML
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <svg className="shrink-0 size-4 me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.3448 21.6009L1.41895 0H22.5809L20.653 21.5975L11.987 24L3.3448 21.6009Z" fill="currentColor" />
                          <path d="M19.0026 20.2227L20.6501 1.7666H12V22.1641L19.0026 20.2227Z" fill="currentColor" />
                          <path d="M5.83407 9.77721L6.0715 12.4264H12V9.77721H5.83407ZM5.59778 7.06432H12V4.41504H5.35693L5.59778 7.06432ZM12 16.6576L11.9884 16.6607L9.03789 15.864L8.84931 13.7511H6.18981L6.56101 17.9108L11.9878 19.4174L12 19.414V16.6576Z" fill="white" fill-opacity="0.8" />
                          <path d="M11.9907 9.77721V12.4264H15.253L14.9455 15.8623L11.9907 16.6598V19.4161L17.4218 17.9108L17.4617 17.4632L18.0842 10.4886L18.1489 9.77721L18.6271 4.41504H11.9907V7.06432H15.7238L15.4827 9.77721H11.9907Z" fill="white" />
                        </svg>
                        CSS
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <svg className="shrink-0 size-4 me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C8.8 5 6.8 6.6 6 9.8C7.2 8.2 8.6 7.6 10.2 8C11.1129 8.228 11.7653 8.89067 12.4876 9.62356C13.664 10.8178 15.0258 12.2 18 12.2C21.2 12.2 23.2 10.6 24 7.4C22.8 9 21.4 9.6 19.8 9.2C18.8871 8.972 18.2347 8.30933 17.5124 7.57644C16.336 6.38222 14.9742 5 12 5ZM6 12.2C2.8 12.2 0.8 13.8 0 17C1.2 15.4 2.6 14.8 4.2 15.2C5.11289 15.4284 5.76533 16.0907 6.48756 16.8236C7.664 18.0178 9.02578 19.4 12 19.4C15.2 19.4 17.2 17.8 18 14.6C16.8 16.2 15.4 16.8 13.8 16.4C12.8871 16.172 12.2347 15.5093 11.5124 14.7764C10.336 13.5822 8.97422 12.2 6 12.2Z" fill="currentColor" />
                        </svg>
                        Tailwind CSS
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <svg className="shrink-0 size-4 me-1" width="160" height="143" viewBox="0 0 160 143" fill="none">
                          <path d="M160 71.2597C160 60.6604 146.726 50.6156 126.376 44.3865C131.072 23.6445 128.985 7.14227 119.788 1.85895C117.668 0.619648 115.19 0.0326126 112.483 0.0326126V7.30534C113.983 7.30534 115.19 7.59886 116.201 8.15328C120.636 10.6971 122.56 20.3832 121.06 32.8414C120.701 35.9071 120.114 39.1358 119.397 42.4297C113.004 40.8642 106.025 39.6576 98.6873 38.8748C94.2845 32.8414 89.7187 27.3624 85.1203 22.5683C95.7521 12.6865 105.732 7.27273 112.515 7.27273V0C103.547 0 91.806 6.39217 79.9348 17.4806C68.0636 6.4574 56.3229 0.130453 47.3543 0.130453V7.40318C54.1052 7.40318 64.1174 12.7843 74.7493 22.6009C70.1834 27.395 65.6176 32.8414 61.2801 38.8748C53.9095 39.6576 46.9303 40.8642 40.5381 42.4623C39.788 39.201 39.2336 36.0375 38.8422 33.0045C37.3094 20.5463 39.201 10.8602 43.6038 8.28373C44.5821 7.6967 45.8541 7.43579 47.3543 7.43579V0.163066C44.6148 0.163066 42.1362 0.750101 39.9837 1.9894C30.8194 7.27273 28.7648 23.7424 33.4937 44.4191C13.2083 50.6808 0 60.693 0 71.2597C0 81.8589 13.2735 91.9038 33.6241 98.1329C28.9278 118.875 31.0151 135.377 40.212 140.66C42.3318 141.9 44.8104 142.487 47.5499 142.487C56.5186 142.487 68.2593 136.095 80.1305 125.006C92.0016 136.029 103.742 142.356 112.711 142.356C115.45 142.356 117.929 141.769 120.082 140.53C129.246 135.247 131.3 118.777 126.572 98.1003C146.792 91.8712 160 81.8263 160 71.2597ZM117.538 49.5067C116.331 53.7138 114.831 58.0514 113.135 62.3889C111.798 59.7799 110.395 57.1708 108.863 54.5618C107.362 51.9527 105.764 49.4089 104.166 46.9303C108.797 47.6152 113.265 48.4631 117.538 49.5067ZM102.601 84.2397C100.057 88.6425 97.448 92.817 94.7411 96.6979C89.8818 97.1219 84.9572 97.3502 80 97.3502C75.0754 97.3502 70.1508 97.1219 65.3241 96.7305C62.6172 92.8496 59.9755 88.7077 57.4317 84.3375C54.9531 80.0652 52.7028 75.7277 50.6482 71.3575C52.6702 66.9874 54.9531 62.6172 57.3991 58.3449C59.9429 53.9421 62.552 49.7676 65.2589 45.8867C70.1182 45.4627 75.0428 45.2344 80 45.2344C84.9246 45.2344 89.8492 45.4627 94.6759 45.8541C97.3828 49.735 100.024 53.8769 102.568 58.247C105.047 62.5194 107.297 66.8569 109.352 71.2271C107.297 75.5972 105.047 79.9674 102.601 84.2397ZM113.135 80C114.896 84.3701 116.396 88.7403 117.636 92.98C113.363 94.0236 108.863 94.9042 104.199 95.5891C105.797 93.0779 107.395 90.5014 108.895 87.8598C110.395 85.2507 111.798 82.609 113.135 80ZM80.0652 114.798C77.0322 111.667 73.9992 108.178 70.9988 104.362C73.934 104.492 76.9344 104.59 79.9674 104.59C83.033 104.59 86.066 104.525 89.0338 104.362C86.0987 108.178 83.0656 111.667 80.0652 114.798ZM55.8011 95.5891C51.17 94.9042 46.702 94.0563 42.4297 93.0126C43.6364 88.8055 45.1366 84.468 46.8325 80.1305C48.1696 82.7395 49.572 85.3486 51.1048 87.9576C52.6376 90.5667 54.203 93.1105 55.8011 95.5891ZM79.9022 27.7212C82.9352 30.852 85.9682 34.3416 88.9686 38.1574C86.0334 38.0269 83.033 37.9291 80 37.9291C76.9344 37.9291 73.9014 37.9943 70.9336 38.1574C73.8687 34.3416 76.9018 30.852 79.9022 27.7212ZM55.7685 46.9303C54.1704 49.4415 52.5724 52.0179 51.0722 54.6596C49.572 57.2687 48.1696 59.8777 46.8325 62.4868C45.0713 58.1166 43.5711 53.7464 42.3318 49.5067C46.6042 48.4957 51.1048 47.6152 55.7685 46.9303ZM26.2536 87.7619C14.7085 82.8373 7.24011 76.3799 7.24011 71.2597C7.24011 66.1394 14.7085 59.6494 26.2536 54.7574C29.0583 53.5508 32.1239 52.4745 35.2874 51.4635C37.1464 57.8557 39.5923 64.5088 42.6254 71.3249C39.625 78.1084 37.2116 84.7289 35.3853 91.0885C32.1566 90.0774 29.0909 88.9686 26.2536 87.7619ZM43.7994 134.366C39.364 131.822 37.4399 122.136 38.9401 109.678C39.2988 106.612 39.8859 103.384 40.6034 100.09C46.9955 101.655 53.9747 102.862 61.3127 103.645C65.7155 109.678 70.2813 115.157 74.8797 119.951C64.2479 129.833 54.2682 135.247 47.4847 135.247C46.0171 135.214 44.7778 134.921 43.7994 134.366ZM121.158 109.515C122.691 121.973 120.799 131.659 116.396 134.236C115.418 134.823 114.146 135.084 112.646 135.084C105.895 135.084 95.8826 129.702 85.2507 119.886C89.8166 115.092 94.3824 109.645 98.7199 103.612C106.091 102.829 113.07 101.623 119.462 100.024C120.212 103.318 120.799 106.482 121.158 109.515ZM133.714 87.7619C130.909 88.9686 127.843 90.0448 124.68 91.0558C122.821 84.6637 120.375 78.0106 117.342 71.1945C120.342 64.4109 122.756 57.7905 124.582 51.4309C127.811 52.4419 130.876 53.5508 133.746 54.7574C145.291 59.682 152.76 66.1394 152.76 71.2597C152.727 76.3799 145.259 82.87 133.714 87.7619Z" fill="currentColor" />
                          <path d="M79.9674 86.1639C88.1988 86.1639 94.8716 79.4911 94.8716 71.2597C94.8716 63.0284 88.1988 56.3555 79.9674 56.3555C71.7361 56.3555 65.0632 63.0284 65.0632 71.2597C65.0632 79.4911 71.7361 86.1639 79.9674 86.1639Z" fill="currentColor" />
                        </svg>
                        React
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <svg className="shrink-0 size-4 me-1" width="164" height="143" viewBox="0 0 164 143" fill="none">
                          <path d="M81.1349 139.508L2.87045 4.50153C2.48398 3.83487 2.96501 3 3.73559 3H62.4308C62.7837 3 63.1104 3.18601 63.2906 3.48946L81.1286 33.5324C81.5188 34.1895 82.4718 34.1839 82.8542 33.5224L100.211 3.4995C100.39 3.19038 100.72 3 101.077 3H160.264C161.035 3 161.516 3.83487 161.13 4.50154L82.8651 139.508C82.4799 140.172 81.5201 140.172 81.1349 139.508Z" stroke="currentColor" stroke-width="5" stroke-linecap="round" />
                          <path d="M81.1292 86.9894L33.8644 4.99943C33.4801 4.33276 33.9612 3.5 34.7307 3.5H62.9276C63.2822 3.5 63.6103 3.6878 63.7899 3.99358L81.1259 33.5116C81.515 34.1742 82.4751 34.1685 82.8564 33.5013L99.7121 4.00386C99.8901 3.69229 100.221 3.5 100.58 3.5H128.778C129.546 3.5 130.027 4.32894 129.647 4.99559L82.8641 86.9856C82.4813 87.6564 81.5149 87.6586 81.1292 86.9894Z" fill="currentColor" />
                        </svg>
                        Vue
                      </li>
                    </ul>
                  </dd>
                </dl>

                <dl className="flex flex-col sm:flex-row gap-1">
                  <dt className="min-w-40">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500">Collaboration:</span>
                  </dt>
                  <dd>
                    <ul>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <svg className="shrink-0 size-4 me-1" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.7438 0.940745C6.84695 1.30308 2.6841 1.63631 2.48837 1.67533C1.9396 1.77319 1.44038 2.14544 1.20563 2.63537L1 3.06646L1.01982 13.3407L1.04893 23.615L1.36234 24.2517C1.53886 24.6042 2.73365 26.2499 4.0362 27.9439C6.61221 31.2836 6.79802 31.47 7.77726 31.5679C8.06156 31.597 10.1966 31.4991 12.5081 31.3622C14.8295 31.2154 18.5508 30.99 20.7842 30.863C30.3233 30.2839 29.8334 30.3328 30.3815 29.8627C31.0672 29.2947 31.0183 30.2251 31.0474 17.7377C31.0672 7.15003 31.0573 6.45509 30.9006 6.13177C30.7148 5.76943 30.3815 5.51487 26.0329 2.45885C23.1243 0.421704 22.9186 0.313932 21.6155 0.294111C21.0772 0.274911 16.6307 0.568497 11.7438 0.940745ZM22.752 2.28232C23.1633 2.46814 26.1704 4.56412 26.6108 4.9661C26.7284 5.08378 26.7675 5.18164 26.7086 5.24048C26.5717 5.35817 7.96245 6.465 7.42421 6.38634C7.17956 6.34732 6.81722 6.20052 6.61159 6.06302C5.75932 5.48514 3.64413 3.75149 3.64413 3.62452C3.64413 3.29129 3.57538 3.29129 11.8714 2.69421C13.4582 2.58644 16.0633 2.39071 17.6502 2.26312C21.0871 1.98874 22.1159 1.99865 22.752 2.28232ZM28.6677 7.63996C28.8046 7.77685 28.9223 8.04132 28.9613 8.29589C28.9904 8.53125 29.0102 12.9189 28.9904 18.0313C28.9613 26.8067 28.9514 27.3555 28.7848 27.61C28.6869 27.7667 28.4912 27.9333 28.3438 27.9823C27.9331 28.1489 8.43318 29.2557 8.03183 29.138C7.84601 29.0891 7.59083 28.9324 7.45394 28.7955L7.21858 28.541L7.18947 19.0799C7.16965 12.4395 7.18947 9.5012 7.26813 9.23672C7.32697 9.041 7.47376 8.80564 7.60136 8.72759C7.77788 8.60991 8.93364 8.51205 12.9101 8.2773C15.7016 8.1206 20.0206 7.85613 22.4987 7.70933C28.3933 7.34638 28.3741 7.34638 28.6677 7.63996Z" className="fill-black dark:fill-neutral-200" fill="currentColor"></path>
                          <path d="M23.4277 10.8818C22.3698 10.9506 21.4296 11.0484 21.3218 11.1073C20.9985 11.2739 20.8028 11.5483 20.7638 11.8617C20.7347 12.185 20.8325 12.224 21.8898 12.3516L22.35 12.4104V16.5925C22.35 19.0799 22.311 20.7256 22.2621 20.6767C22.2131 20.6178 20.8226 18.5027 19.167 15.9756C17.512 13.4392 16.1407 11.3525 16.1209 11.3333C16.1011 11.3135 15.024 11.3724 13.7313 11.4609C12.1445 11.5687 11.273 11.6666 11.0965 11.7644C10.8122 11.9112 10.4988 12.4303 10.4988 12.7734C10.4988 12.979 10.871 13.0868 11.6545 13.0868H12.0658V25.1139L11.4 25.3196C10.8809 25.4763 10.7044 25.5741 10.6165 25.7698C10.4598 26.1031 10.4697 26.4066 10.6264 26.4066C10.6852 26.4066 11.792 26.3378 13.0649 26.2598C15.582 26.113 15.8657 26.0442 16.1302 25.5252C16.2088 25.3685 16.277 25.2019 16.277 25.1529C16.277 25.1139 15.9345 24.9962 15.5226 24.8984C15.1014 24.8005 14.6802 24.7027 14.5923 24.6828C14.4257 24.6339 14.4157 24.3304 14.4157 20.1186V15.6033L17.3931 20.2753C20.5173 25.1721 20.9093 25.7308 21.3893 25.9755C21.987 26.2889 23.5051 26.0733 24.2688 25.5741L24.5042 25.4273L24.524 18.7479L24.5531 12.0586L25.0722 11.9608C25.6891 11.8431 25.9734 11.5594 25.9734 11.0695C25.9734 10.7561 25.9536 10.7362 25.66 10.7462C25.4847 10.7542 24.4757 10.813 23.4277 10.8818Z" className="fill-black dark:fill-neutral-200" fill="currentColor"></path>
                        </svg>
                        Notion
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <svg className="shrink-0 size-4 me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.62424 14.7793C7.64424 14.7993 7.64424 14.8393 7.62424 14.8793C7.54424 15.0193 7.38424 15.0993 7.22424 15.0793C6.92424 15.0393 6.70424 14.7993 6.72424 14.4993C6.72424 14.2993 6.76424 14.1193 6.82424 13.9193C6.92424 13.6793 6.82424 13.4193 6.62424 13.2793C6.50424 13.1993 6.34424 13.1793 6.20424 13.1993C6.06424 13.2193 5.94424 13.3193 5.86425 13.4393C5.80425 13.5393 5.76425 13.6393 5.74425 13.7393C5.74425 13.7593 5.72425 13.7793 5.72425 13.7793C5.68425 13.8993 5.60425 13.9393 5.54425 13.9393C5.52425 13.9393 5.48425 13.9193 5.46425 13.8593C5.40425 13.5193 5.52425 13.1793 5.74425 12.9193C5.94424 12.6993 6.22424 12.5993 6.52424 12.6393C6.82424 12.6793 7.10424 12.8793 7.22424 13.1593C7.36424 13.4993 7.32424 13.8793 7.14424 14.1993C7.12424 14.2193 7.12424 14.2593 7.10424 14.2793C7.04424 14.3993 7.02424 14.5593 7.10424 14.6793C7.16424 14.7593 7.24424 14.7993 7.34424 14.7993C7.38424 14.7993 7.42424 14.7993 7.46424 14.7793C7.54424 14.7393 7.60424 14.7393 7.62424 14.7793ZM20.8442 15.0993C20.8242 15.7193 20.6842 16.3193 20.4642 16.8993C19.3442 19.5993 16.6642 21.0993 13.4642 20.9993C10.4842 20.9193 7.94424 19.3393 6.84424 16.7593C6.14424 16.7393 5.46425 16.4593 4.96425 15.9993C4.42425 15.5393 4.08425 14.8993 4.00425 14.1993C3.94425 13.7193 4.00425 13.2393 4.18425 12.7793L3.56425 12.2593C0.68425 9.85935 9.62424 -0.100651 12.4642 2.39935C12.4842 2.41935 13.4442 3.35935 13.4442 3.35935C13.4442 3.35935 13.9642 3.13935 13.9842 3.13935C16.4842 2.09935 18.5242 2.59935 18.5242 4.25935C18.5242 5.11935 17.9842 6.11935 17.1042 7.03935C17.4642 7.39935 17.7042 7.83935 17.8242 8.31935C17.9242 8.65935 17.9642 8.99935 17.9842 9.35935C18.0042 9.71935 18.0242 10.5393 18.0242 10.5393C18.0442 10.5393 18.3042 10.6193 18.3842 10.6393C18.9042 10.7593 19.3642 10.9793 19.7642 11.3193C19.9842 11.5193 20.1042 11.7993 20.1642 12.0793C20.2242 12.4593 20.1242 12.8393 19.9042 13.1393C19.9642 13.2793 20.0042 13.3993 20.0642 13.5393C20.1442 13.7793 20.1842 13.9793 20.2042 13.9993C20.4242 14.0393 20.8442 14.3593 20.8442 15.0993ZM8.24424 13.6193C8.04424 12.3593 7.20424 11.9193 6.62424 11.8793C6.48424 11.8793 6.34424 11.8793 6.18424 11.9193C5.16425 12.1193 4.56425 12.9993 4.68425 14.1393C4.86425 15.1993 5.72425 15.9993 6.78424 16.0593C6.88424 16.0593 6.98424 16.0593 7.08424 16.0393C8.14424 15.8793 8.40424 14.7393 8.24424 13.6193ZM10.0042 5.61935C10.8842 4.89935 11.8042 4.25935 12.7842 3.69935C12.7842 3.69935 12.0042 2.79935 11.7642 2.71935C10.3242 2.31935 7.20424 4.47935 5.20425 7.33935C4.40425 8.49935 3.24425 10.5393 3.80425 11.5793C4.00425 11.8193 4.22425 12.0193 4.46425 12.2193C4.82425 11.6993 5.38425 11.3393 6.02424 11.2193C6.80424 9.03935 8.18424 7.09935 10.0042 5.61935ZM13.1242 15.5993C13.2042 15.9393 13.4642 16.2193 13.8042 16.2993C13.9842 16.3593 14.1442 16.4193 14.3442 16.4393C16.6242 16.8393 18.7642 15.5193 19.2442 15.1993C19.2842 15.1793 19.3042 15.1993 19.2842 15.2393C19.2642 15.2593 19.2442 15.2793 19.2442 15.2993C18.6642 16.0593 17.0842 16.9393 15.0242 16.9393C14.1242 16.9393 13.2242 16.6193 12.9042 16.1393C12.3842 15.3793 12.8842 14.2793 13.7242 14.3993C13.7242 14.3993 14.0242 14.4393 14.1042 14.4393C15.4242 14.5593 16.7642 14.3593 17.9842 13.8193C19.1442 13.2793 19.5842 12.6793 19.5242 12.1993C19.5042 12.0593 19.4242 11.9193 19.3242 11.7993C19.0042 11.5393 18.6242 11.3593 18.2242 11.2793C18.0442 11.2193 17.9242 11.1993 17.7842 11.1593C17.5442 11.0793 17.4242 11.0193 17.4042 10.5593C17.3842 10.3593 17.3642 9.67935 17.3442 9.37935C17.3242 8.87935 17.2642 8.19935 16.8442 7.91935C16.7442 7.83935 16.6042 7.79935 16.4842 7.79935C16.4042 7.79935 16.3442 7.79935 16.2642 7.81935C16.0442 7.85935 15.8642 7.97935 15.7042 8.13935C15.3042 8.49935 14.7842 8.67935 14.2442 8.63935C13.9442 8.61935 13.6442 8.57935 13.2842 8.55935C13.2242 8.55935 13.1442 8.55935 13.0842 8.53935C12.1242 8.55935 11.3442 9.27935 11.2242 10.2393C11.0242 11.6593 12.0442 12.3793 12.3442 12.8193C12.3842 12.8793 12.4242 12.9393 12.4242 13.0193C12.4242 13.0993 12.3842 13.1793 12.3242 13.2193C11.5042 14.1393 11.2042 15.4193 11.5242 16.6193C11.5642 16.7593 11.6042 16.8993 11.6642 17.0393C12.4042 18.7793 14.7242 19.5993 16.9842 18.8593C17.2842 18.7593 17.5642 18.6393 17.8442 18.4993C18.3442 18.2593 18.7842 17.9193 19.1642 17.5193C19.7442 16.9393 20.1242 16.1793 20.2642 15.3593C20.3242 14.8993 20.2242 14.7393 20.1042 14.6593C20.0042 14.5993 19.9042 14.5793 19.7842 14.5993C19.7242 14.2393 19.6242 13.8993 19.4842 13.5793C18.8442 14.0593 18.1042 14.4393 17.3242 14.6593C16.3842 14.9193 15.4242 15.0193 14.4442 14.9793C13.8242 14.9193 13.4042 14.7393 13.2442 15.2593C14.1842 15.5793 15.1842 15.6793 16.1842 15.5593C16.2042 15.5593 16.2442 15.5793 16.2442 15.5993C16.2442 15.6193 16.2242 15.6393 16.2042 15.6593C16.1242 15.6393 14.9642 16.1793 13.1242 15.5993ZM9.74424 7.37935C10.5042 6.83935 11.3842 6.45935 12.2842 6.25935C13.3242 6.01935 14.3842 6.01935 15.4242 6.25935C15.4642 6.25935 15.4842 6.19935 15.4442 6.17935C14.9042 5.89935 14.3242 5.73935 13.7042 5.71935C13.6842 5.71935 13.6642 5.69935 13.6642 5.67935V5.65935C13.7642 5.53935 13.8642 5.41935 13.9842 5.33935C14.0042 5.31935 14.0042 5.29935 13.9842 5.29935L13.9642 5.27935C13.2242 5.35935 12.5242 5.59935 11.8842 6.01935C11.8642 6.01935 11.8442 6.01935 11.8442 6.01935V5.99935C11.8842 5.81935 11.9642 5.63935 12.0642 5.45935C12.0642 5.43935 12.0642 5.41935 12.0442 5.41935H12.0242C11.1242 5.91935 10.3242 6.57935 9.66424 7.35935C9.64424 7.37935 9.64424 7.39935 9.66424 7.39935C9.70424 7.39935 9.72424 7.39935 9.74424 7.37935ZM15.7442 12.1993C15.8642 12.2793 16.0442 12.2593 16.1442 12.1393C16.2042 12.0193 16.1242 11.8793 15.9642 11.7993C15.8442 11.7193 15.6642 11.7393 15.5642 11.8593C15.5042 11.9593 15.5842 12.1193 15.7442 12.1993ZM16.2442 10.3793C16.2842 10.5793 16.3642 10.7793 16.4842 10.9393C16.6042 10.9193 16.7442 10.9193 16.8642 10.9393C16.9442 10.7193 16.9442 10.4793 16.8842 10.2593C16.7842 9.83935 16.6642 9.59935 16.4242 9.63935C16.1642 9.67935 16.1442 9.97935 16.2442 10.3793ZM16.7842 11.3393C16.6242 11.2993 16.4442 11.3793 16.3842 11.5593C16.3442 11.7193 16.4242 11.8993 16.6042 11.9593C16.7842 12.0193 16.9442 11.9193 17.0042 11.7393C17.0042 11.7193 17.0242 11.6793 17.0242 11.6593C17.0242 11.4993 16.9242 11.3593 16.7842 11.3393Z" fill="currentColor" />
                          <path d="M12.5642 11.2989C12.5242 11.2989 12.5042 11.2789 12.5042 11.2589C12.4842 11.1789 12.6042 11.0789 12.7042 10.9789C13.0442 10.7189 13.5042 10.6789 13.8842 10.8389C14.0642 10.9189 14.2242 11.0389 14.3242 11.1989C14.3642 11.2589 14.3642 11.3189 14.3442 11.3389C14.3042 11.3789 14.2042 11.3389 14.0242 11.2589C13.8242 11.1589 13.5842 11.0989 13.3642 11.1189C13.1042 11.1589 12.8242 11.2189 12.5642 11.2989ZM14.2842 11.6589C14.1242 11.4989 13.9042 11.4189 13.7042 11.4589C13.5442 11.4789 13.4042 11.5389 13.2842 11.6389C13.2242 11.6789 13.1842 11.7389 13.1842 11.8189C13.1842 11.8389 13.1842 11.8589 13.2042 11.8589C13.2242 11.8589 13.2242 11.8789 13.2442 11.8789C13.3042 11.8789 13.3642 11.8589 13.4042 11.8389C13.6442 11.7589 13.8842 11.7189 14.1242 11.7589C14.2442 11.7789 14.2842 11.7789 14.3242 11.7389C14.3042 11.6989 14.3042 11.6789 14.2842 11.6589Z" fill="currentColor" />
                        </svg>
                        Mailchimp
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        <svg className="shrink-0 size-4 me-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.79945 0C7.47279 0.000978593 6.39908 1.07548 6.40006 2.39951C6.39908 3.72355 7.47377 4.79804 8.80043 4.79902H11.2009V2.40049C11.2019 1.07645 10.1272 0.00195719 8.79945 0ZM8.79945 6.4H2.4004C1.07371 6.40098 -0.000977873 7.47548 2.67973e-06 8.79953C-0.00195842 10.1236 1.07273 11.198 2.39942 11.2H8.79945C10.1262 11.199 11.2009 10.1245 11.1999 8.8005C11.2009 7.47547 10.1262 6.40098 8.79945 6.4Z" fill="currentColor" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M24 8.79953C24.001 7.47548 22.9263 6.40098 21.5996 6.4C20.2729 6.40098 19.1982 7.47548 19.1992 8.79953V11.2H21.5996C22.9263 11.199 24.001 10.1246 24 8.79953ZM17.6 8.79953V2.39951C17.6009 1.07645 16.5272 0.00195719 15.2006 0C13.8738 0.000978593 12.7991 1.07548 12.8001 2.39951V8.79953C12.7981 10.1236 13.8728 11.198 15.1996 11.2C16.5262 11.199 17.6009 10.1246 17.6 8.79953Z" fill="currentColor" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1996 24C16.5262 23.999 17.6009 22.9245 17.5999 21.6005C17.6009 20.2765 16.5262 19.2019 15.1996 19.201H12.7992V21.6005C12.7981 22.9235 13.8729 23.9981 15.1996 24ZM15.1996 17.5991H21.5996C22.9263 17.5981 24.001 16.5236 24 15.1995C24.0019 13.8755 22.9273 12.801 21.6006 12.799H15.2006C13.8739 12.8 12.7992 13.8745 12.8002 15.1985C12.7992 16.5235 13.8729 17.5981 15.1996 17.5991Z" fill="currentColor" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.70464e-07 15.1995C-0.000979883 16.5236 1.07371 17.5981 2.40039 17.5991C3.72708 17.5981 4.80176 16.5236 4.80079 15.1995V12.8H2.40039C1.07371 12.801 -0.000979883 13.8755 6.70464e-07 15.1995ZM6.40006 15.1995V21.5995C6.39811 22.9235 7.47279 23.9981 8.79945 24C10.1262 23.999 11.2009 22.9245 11.1999 21.6005V15.2015C11.2018 13.8774 10.1272 12.803 8.80043 12.801C7.47279 12.801 6.39908 13.8755 6.40006 15.1995Z" fill="currentColor" />
                        </svg>
                        Slack
                      </li>
                    </ul>
                  </dd>
                </dl>

                <dl className="flex flex-col sm:flex-row gap-1">
                  <dt className="min-w-40">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500">Design Expertise:</span>
                  </dt>
                  <dd>
                    <ul>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        UI/UX Design
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        Design Systems
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        Custom Illustrations
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        Responsive Design
                      </li>
                    </ul>
                  </dd>
                </dl>

                <dl className="flex flex-col sm:flex-row gap-1">
                  <dt className="min-w-40">
                    <span className="block text-sm text-gray-500 dark:text-neutral-500">Soft Skills:</span>
                  </dt>
                  <dd>
                    <ul>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        Strong communication
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        Problem-solving
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        Attention to detail
                      </li>
                      <li className="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-neutral-200">
                        Time management
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>

            </div>



            <div className="mt-10 sm:mt-14">
              <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
                Experiência de trabalho
              </h2>


              <div>

                <div className="group relative flex gap-x-5">

                  <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div className="relative z-10 size-6 flex justify-center items-center">
                      <svg className="shrink-0 size-6 text-gray-600 dark:text-neutral-400" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7438 0.940745C6.84695 1.30308 2.6841 1.63631 2.48837 1.67533C1.9396 1.77319 1.44038 2.14544 1.20563 2.63537L1 3.06646L1.01982 13.3407L1.04893 23.615L1.36234 24.2517C1.53886 24.6042 2.73365 26.2499 4.0362 27.9439C6.61221 31.2836 6.79802 31.47 7.77726 31.5679C8.06156 31.597 10.1966 31.4991 12.5081 31.3622C14.8295 31.2154 18.5508 30.99 20.7842 30.863C30.3233 30.2839 29.8334 30.3328 30.3815 29.8627C31.0672 29.2947 31.0183 30.2251 31.0474 17.7377C31.0672 7.15003 31.0573 6.45509 30.9006 6.13177C30.7148 5.76943 30.3815 5.51487 26.0329 2.45885C23.1243 0.421704 22.9186 0.313932 21.6155 0.294111C21.0772 0.274911 16.6307 0.568497 11.7438 0.940745ZM22.752 2.28232C23.1633 2.46814 26.1704 4.56412 26.6108 4.9661C26.7284 5.08378 26.7675 5.18164 26.7086 5.24048C26.5717 5.35817 7.96245 6.465 7.42421 6.38634C7.17956 6.34732 6.81722 6.20052 6.61159 6.06302C5.75932 5.48514 3.64413 3.75149 3.64413 3.62452C3.64413 3.29129 3.57538 3.29129 11.8714 2.69421C13.4582 2.58644 16.0633 2.39071 17.6502 2.26312C21.0871 1.98874 22.1159 1.99865 22.752 2.28232ZM28.6677 7.63996C28.8046 7.77685 28.9223 8.04132 28.9613 8.29589C28.9904 8.53125 29.0102 12.9189 28.9904 18.0313C28.9613 26.8067 28.9514 27.3555 28.7848 27.61C28.6869 27.7667 28.4912 27.9333 28.3438 27.9823C27.9331 28.1489 8.43318 29.2557 8.03183 29.138C7.84601 29.0891 7.59083 28.9324 7.45394 28.7955L7.21858 28.541L7.18947 19.0799C7.16965 12.4395 7.18947 9.5012 7.26813 9.23672C7.32697 9.041 7.47376 8.80564 7.60136 8.72759C7.77788 8.60991 8.93364 8.51205 12.9101 8.2773C15.7016 8.1206 20.0206 7.85613 22.4987 7.70933C28.3933 7.34638 28.3741 7.34638 28.6677 7.63996Z" className="fill-black dark:fill-neutral-200" fill="currentColor"></path>
                        <path d="M23.4277 10.8818C22.3698 10.9506 21.4296 11.0484 21.3218 11.1073C20.9985 11.2739 20.8028 11.5483 20.7638 11.8617C20.7347 12.185 20.8325 12.224 21.8898 12.3516L22.35 12.4104V16.5925C22.35 19.0799 22.311 20.7256 22.2621 20.6767C22.2131 20.6178 20.8226 18.5027 19.167 15.9756C17.512 13.4392 16.1407 11.3525 16.1209 11.3333C16.1011 11.3135 15.024 11.3724 13.7313 11.4609C12.1445 11.5687 11.273 11.6666 11.0965 11.7644C10.8122 11.9112 10.4988 12.4303 10.4988 12.7734C10.4988 12.979 10.871 13.0868 11.6545 13.0868H12.0658V25.1139L11.4 25.3196C10.8809 25.4763 10.7044 25.5741 10.6165 25.7698C10.4598 26.1031 10.4697 26.4066 10.6264 26.4066C10.6852 26.4066 11.792 26.3378 13.0649 26.2598C15.582 26.113 15.8657 26.0442 16.1302 25.5252C16.2088 25.3685 16.277 25.2019 16.277 25.1529C16.277 25.1139 15.9345 24.9962 15.5226 24.8984C15.1014 24.8005 14.6802 24.7027 14.5923 24.6828C14.4257 24.6339 14.4157 24.3304 14.4157 20.1186V15.6033L17.3931 20.2753C20.5173 25.1721 20.9093 25.7308 21.3893 25.9755C21.987 26.2889 23.5051 26.0733 24.2688 25.5741L24.5042 25.4273L24.524 18.7479L24.5531 12.0586L25.0722 11.9608C25.6891 11.8431 25.9734 11.5594 25.9734 11.0695C25.9734 10.7561 25.9536 10.7362 25.66 10.7462C25.4847 10.7542 24.4757 10.813 23.4277 10.8818Z" className="fill-black dark:fill-neutral-200" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>



                  <div className="grow pb-8 group-last:pb-0">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                      2024 - Presente
                    </h3>

                    <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                      Desenvolvedor back end - Estagio Nubank
                    </p>

                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                      A empresa tem altas expectativas, e há um entendimento mútuo de expectativas e desempenho.
                    </p>

                    <ul className="list-disc ms-6 mt-3 space-y-1.5">
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Desenvolvi e mantive APIs robustas e escaláveis.
                      </li>
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Implementei funcionalidades e integrei sistemas existentes.

                      </li>
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Colaborei com a equipe para identificar e resolver problemas técnicos.
                      </li>
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Participei da criação de documentação técnica e melhores práticas.
                      </li>
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Engajei-me em revisões de código e testes para garantir a qualidade do software.
                      </li>
                    </ul>
                  </div>

                </div>



                <div className="group relative flex gap-x-5">

                  <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div className="relative z-10 size-6 flex justify-center items-center">
                      <svg className="shrink-0 size-6 text-gray-600 dark:text-neutral-400" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_11766_122079)">
                          <path d="M16 32C7.16 32 0 24.84 0 16C0 7.16 7.16 0 16 0C24.84 0 32 7.16 32 16C32 24.84 24.84 32 16 32Z" fill="#FFE01B"></path>
                          <path d="M11.72 19.28C11.74 19.3 11.74 19.34 11.72 19.38C11.64 19.52 11.48 19.6 11.32 19.58C11.02 19.54 10.8 19.3 10.82 19C10.82 18.8 10.86 18.62 10.92 18.42C11.02 18.18 10.92 17.92 10.72 17.78C10.6 17.7 10.44 17.68 10.3 17.7C10.16 17.72 10.04 17.82 9.96001 17.94C9.90001 18.04 9.86001 18.14 9.84001 18.24C9.84001 18.26 9.82001 18.28 9.82001 18.28C9.78001 18.4 9.70001 18.44 9.64001 18.44C9.62001 18.44 9.58001 18.42 9.56001 18.36C9.50001 18.02 9.62001 17.68 9.84001 17.42C10.04 17.2 10.32 17.1 10.62 17.14C10.92 17.18 11.2 17.38 11.32 17.66C11.46 18 11.42 18.38 11.24 18.7C11.22 18.72 11.22 18.76 11.2 18.78C11.14 18.9 11.12 19.06 11.2 19.18C11.26 19.26 11.34 19.3 11.44 19.3C11.48 19.3 11.52 19.3 11.56 19.28C11.64 19.24 11.7 19.24 11.72 19.28ZM24.94 19.6C24.92 20.22 24.78 20.82 24.56 21.4C23.44 24.1 20.76 25.6 17.56 25.5C14.58 25.42 12.04 23.84 10.94 21.26C10.24 21.24 9.56001 20.96 9.06001 20.5C8.52001 20.04 8.18001 19.4 8.10001 18.7C8.04001 18.22 8.10001 17.74 8.28001 17.28L7.66001 16.76C4.78001 14.36 13.72 4.4 16.56 6.9C16.58 6.92 17.54 7.86 17.54 7.86C17.54 7.86 18.06 7.64 18.08 7.64C20.58 6.6 22.62 7.1 22.62 8.76C22.62 9.62 22.08 10.62 21.2 11.54C21.56 11.9 21.8 12.34 21.92 12.82C22.02 13.16 22.06 13.5 22.08 13.86C22.1 14.22 22.12 15.04 22.12 15.04C22.14 15.04 22.4 15.12 22.48 15.14C23 15.26 23.46 15.48 23.86 15.82C24.08 16.02 24.2 16.3 24.26 16.58C24.32 16.96 24.22 17.34 24 17.64C24.06 17.78 24.1 17.9 24.16 18.04C24.24 18.28 24.28 18.48 24.3 18.5C24.52 18.54 24.94 18.86 24.94 19.6ZM12.34 18.12C12.14 16.86 11.3 16.42 10.72 16.38C10.58 16.38 10.44 16.38 10.28 16.42C9.26001 16.62 8.66001 17.5 8.78001 18.64C8.96001 19.7 9.82001 20.5 10.88 20.56C10.98 20.56 11.08 20.56 11.18 20.54C12.24 20.38 12.5 19.24 12.34 18.12ZM14.1 10.12C14.98 9.4 15.9 8.76 16.88 8.2C16.88 8.2 16.1 7.3 15.86 7.22C14.42 6.82 11.3 8.98 9.30001 11.84C8.50001 13 7.34001 15.04 7.90001 16.08C8.10001 16.32 8.32001 16.52 8.56001 16.72C8.92001 16.2 9.48001 15.84 10.12 15.72C10.9 13.54 12.28 11.6 14.1 10.12ZM17.22 20.1C17.3 20.44 17.56 20.72 17.9 20.8C18.08 20.86 18.24 20.92 18.44 20.94C20.72 21.34 22.86 20.02 23.34 19.7C23.38 19.68 23.4 19.7 23.38 19.74C23.36 19.76 23.34 19.78 23.34 19.8C22.76 20.56 21.18 21.44 19.12 21.44C18.22 21.44 17.32 21.12 17 20.64C16.48 19.88 16.98 18.78 17.82 18.9C17.82 18.9 18.12 18.94 18.2 18.94C19.52 19.06 20.86 18.86 22.08 18.32C23.24 17.78 23.68 17.18 23.62 16.7C23.6 16.56 23.52 16.42 23.42 16.3C23.1 16.04 22.72 15.86 22.32 15.78C22.14 15.72 22.02 15.7 21.88 15.66C21.64 15.58 21.52 15.52 21.5 15.06C21.48 14.86 21.46 14.18 21.44 13.88C21.42 13.38 21.36 12.7 20.94 12.42C20.84 12.34 20.7 12.3 20.58 12.3C20.5 12.3 20.44 12.3 20.36 12.32C20.14 12.36 19.96 12.48 19.8 12.64C19.4 13 18.88 13.18 18.34 13.14C18.04 13.12 17.74 13.08 17.38 13.06C17.32 13.06 17.24 13.06 17.18 13.04C16.22 13.06 15.44 13.78 15.32 14.74C15.12 16.16 16.14 16.88 16.44 17.32C16.48 17.38 16.52 17.44 16.52 17.52C16.52 17.6 16.48 17.68 16.42 17.72C15.6 18.64 15.3 19.92 15.62 21.12C15.66 21.26 15.7 21.4 15.76 21.54C16.5 23.28 18.82 24.1 21.08 23.36C21.38 23.26 21.66 23.14 21.94 23C22.44 22.76 22.88 22.42 23.26 22.02C23.84 21.44 24.22 20.68 24.36 19.86C24.42 19.4 24.32 19.24 24.2 19.16C24.1 19.1 24 19.08 23.88 19.1C23.82 18.74 23.72 18.4 23.58 18.08C22.94 18.56 22.2 18.94 21.42 19.16C20.48 19.42 19.52 19.52 18.54 19.48C17.92 19.42 17.5 19.24 17.34 19.76C18.28 20.08 19.28 20.18 20.28 20.06C20.3 20.06 20.34 20.08 20.34 20.1C20.34 20.12 20.32 20.14 20.3 20.16C20.22 20.14 19.06 20.68 17.22 20.1ZM13.84 11.88C14.6 11.34 15.48 10.96 16.38 10.76C17.42 10.52 18.48 10.52 19.52 10.76C19.56 10.76 19.58 10.7 19.54 10.68C19 10.4 18.42 10.24 17.8 10.22C17.78 10.22 17.76 10.2 17.76 10.18V10.16C17.86 10.04 17.96 9.92 18.08 9.84C18.1 9.82 18.1 9.8 18.08 9.8L18.06 9.78C17.32 9.86 16.62 10.1 15.98 10.52C15.96 10.52 15.94 10.52 15.94 10.52V10.5C15.98 10.32 16.06 10.14 16.16 9.96C16.16 9.94 16.16 9.92 16.14 9.92H16.12C15.22 10.42 14.42 11.08 13.76 11.86C13.74 11.88 13.74 11.9 13.76 11.9C13.8 11.9 13.82 11.9 13.84 11.88ZM19.84 16.7C19.96 16.78 20.14 16.76 20.24 16.64C20.3 16.52 20.22 16.38 20.06 16.3C19.94 16.22 19.76 16.24 19.66 16.36C19.6 16.46 19.68 16.62 19.84 16.7ZM20.34 14.88C20.38 15.08 20.46 15.28 20.58 15.44C20.7 15.42 20.84 15.42 20.96 15.44C21.04 15.22 21.04 14.98 20.98 14.76C20.88 14.34 20.76 14.1 20.52 14.14C20.26 14.18 20.24 14.48 20.34 14.88ZM20.88 15.84C20.72 15.8 20.54 15.88 20.48 16.06C20.44 16.22 20.52 16.4 20.7 16.46C20.88 16.52 21.04 16.42 21.1 16.24C21.1 16.22 21.12 16.18 21.12 16.16C21.12 16 21.02 15.86 20.88 15.84Z" fill="black"></path>
                          <path d="M16.66 15.8C16.62 15.8 16.6 15.78 16.6 15.76C16.58 15.68 16.7 15.58 16.8 15.48C17.14 15.22 17.6 15.18 17.98 15.34C18.16 15.42 18.32 15.54 18.42 15.7C18.46 15.76 18.46 15.82 18.44 15.84C18.4 15.88 18.3 15.84 18.12 15.76C17.92 15.66 17.68 15.6 17.46 15.62C17.2 15.66 16.92 15.72 16.66 15.8ZM18.38 16.16C18.22 16 18 15.92 17.8 15.96C17.64 15.98 17.5 16.04 17.38 16.14C17.32 16.18 17.28 16.24 17.28 16.32C17.28 16.34 17.28 16.36 17.3 16.36C17.32 16.36 17.32 16.38 17.34 16.38C17.4 16.38 17.46 16.36 17.5 16.34C17.74 16.26 17.98 16.22 18.22 16.26C18.34 16.28 18.38 16.28 18.42 16.24C18.4 16.2 18.4 16.18 18.38 16.16Z" fill="black"></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_11766_122079">
                            <rect width="32" height="32" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>



                  <div className="grow pb-8 group-last:pb-0">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                      2023 - 2024
                    </h3>

                    <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                      Desenvolvedor Full stack
                    </p>

                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                      A Faculdade de Ciências Pro Saber é uma instituição de ensino com mais de 14 anos de experiência no mercado, oferecendo cursos de pós-graduação. Durante meu período lá, trabalhei como programador Full Stack por 11 meses, desenvolvendo soluções completas para melhorar os sistemas internos da faculdade e contribuir para a eficiência e qualidade dos serviços educacionais.
                    </p>

                    <div className="mt-3">

                      <a className="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none dark:border-neutral-700" href="#">
                        <div className="relative flex items-center overflow-hidden">
                          <img className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg" src="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Image" />

                          <div className="grow p-4 ms-32 sm:ms-48">
                            <div className="min-h-24 flex flex-col justify-center">
                              <h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-300">
                                Studio by Mailchimp
                              </h3>
                              <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                Produce professional, reliable streams easily leveraging Mailchimp's innovative broadcast studio.
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>

                    </div>
                  </div>

                </div>



                <div className="group relative flex gap-x-5">

                  <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div className="relative z-10 size-6 flex justify-center items-center">
                      <svg className="shrink-0 size-6 text-gray-600 dark:text-neutral-400" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7326 0C9.96372 0.00130479 8.53211 1.43397 8.53342 3.19935C8.53211 4.96473 9.96503 6.39739 11.7339 6.39869H14.9345V3.20065C14.9358 1.43527 13.5029 0.00260958 11.7326 0C11.7339 0 11.7339 0 11.7326 0M11.7326 8.53333H3.20053C1.43161 8.53464 -0.00130383 9.9673 3.57297e-06 11.7327C-0.00261123 13.4981 1.4303 14.9307 3.19922 14.9333H11.7326C13.5016 14.932 14.9345 13.4994 14.9332 11.734C14.9345 9.9673 13.5016 8.53464 11.7326 8.53333V8.53333Z" fill="#36C5F0"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M32 11.7327C32.0013 9.9673 30.5684 8.53464 28.7995 8.53333C27.0306 8.53464 25.5976 9.9673 25.5989 11.7327V14.9333H28.7995C30.5684 14.932 32.0013 13.4994 32 11.7327ZM23.4666 11.7327V3.19935C23.4679 1.43527 22.0363 0.00260958 20.2674 0C18.4984 0.00130479 17.0655 1.43397 17.0668 3.19935V11.7327C17.0642 13.4981 18.4971 14.9307 20.2661 14.9333C22.035 14.932 23.4679 13.4994 23.4666 11.7327Z" fill="#2EB67D"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2661 32C22.035 31.9987 23.4679 30.566 23.4666 28.8007C23.4679 27.0353 22.035 25.6026 20.2661 25.6013H17.0656V28.8007C17.0642 30.5647 18.4972 31.9974 20.2661 32ZM20.2661 23.4654H28.7995C30.5684 23.4641 32.0013 22.0314 32 20.266C32.0026 18.5006 30.5697 17.068 28.8008 17.0654H20.2674C18.4985 17.0667 17.0656 18.4993 17.0669 20.2647C17.0656 22.0314 18.4972 23.4641 20.2661 23.4654V23.4654Z" fill="#ECB22E"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.93953e-07 20.266C-0.00130651 22.0314 1.43161 23.4641 3.20052 23.4654C4.96944 23.4641 6.40235 22.0314 6.40105 20.266V17.0667H3.20052C1.43161 17.068 -0.00130651 18.5006 8.93953e-07 20.266ZM8.53342 20.266V28.7993C8.53081 30.5647 9.96372 31.9974 11.7326 32C13.5016 31.9987 14.9345 30.566 14.9332 28.8007V20.2686C14.9358 18.5032 13.5029 17.0706 11.7339 17.068C9.96372 17.068 8.53211 18.5006 8.53342 20.266C8.53342 20.2673 8.53342 20.266 8.53342 20.266Z" fill="#E01E5A"></path>
                      </svg>
                    </div>
                  </div>



                  <div className="grow pb-8 group-last:pb-0">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                      2023 - 2024

                    </h3>

                    <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                      Marcadores de Discurso (MDIS)
                    </p>

                    <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                      Desenvolvi um sistema de Marcadores de Discurso (MDIS) como projeto freelance para uma cliente, que era estudante da Universidade Estadual de Feira de Santana (UEFS) no curso de Letras. Este projeto foi parte do trabalho de conclusão de curso (TCC) dela.                    </p>
                  </div>

                </div>



                <div className="group relative flex gap-x-5">

                  <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div className="relative z-10 size-6 flex justify-center items-center">
                      <svg className="shrink-0 size-6 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 12h.01" />
                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                        <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                        <rect width="20" height="14" x="2" y="6" rx="2" />
                      </svg>
                    </div>
                  </div>



                  <div className="grow pb-8 group-last:pb-0">
                    <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                      2023 - 2024
                    </h3>

                    <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                      Desenvolvedor Mobile na Fonotherapp                    </p>

                    <ul className="list-disc ms-6 mt-3 space-y-1.5">
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Desenvolvi o aplicativo Fonotherapp para Android e iOS, destinado a otimizar sistemas de fonoaudiologia.

                      </li>
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Criei soluções móveis para gerenciar pacientes e prontuários, aprimorando o fluxo de trabalho dos profissionais de fonoaudiologia.

                      </li>
                      <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Trabalhei no desenvolvimento de funcionalidades específicas para atender às necessidades do setor.
                      </li>
                    </ul>
                  </div>

                </div>

              </div>

            </div>



            <div className="mt-10 sm:mt-14">
              <h2 className="mb-3 font-medium text-gray-800 dark:text-neutral-200">
                Educação
              </h2>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">
                  <svg className="shrink-0 size-10 mb-3" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H400V400H0V0Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M137.052 140.91V150.537L114.437 154.193V144.697L137.052 140.91ZM137.052 154.794V272.378L114.437 261.589V158.557L137.052 154.794ZM263.525 272.394V212.092C263.525 183.25 243.862 164.957 212.866 164.957C178.834 164.957 166.71 188.427 162.413 197.628C174.125 189.288 184.386 186.354 198.794 187.306C217.056 188.516 230.901 199.871 230.901 213.373V264.142L263.525 272.394ZM158.238 80.9416L149.654 79.5369H137.052V136.664L114.437 140.478V96.2504L126.598 78.4059L133.686 60.4226L144.306 34.0431L137.062 75.8306L149.606 75.8348L157.148 77.055L148.579 46.3198L164.534 23.0572L209.681 5.88106L158.238 80.9416ZM209.718 54.278C199.878 48.6834 202.45 57.9905 202.45 43.9271C202.45 42.4143 202.71 40.1026 202.982 39.7498C203.034 39.6792 203.026 39.534 203.058 39.3618L200.967 40.115C200.621 40.1938 200.311 41.6216 200.374 43.7777C200.527 49.0195 201.949 52.2007 207.464 55.1682L209.718 54.278ZM276.123 131.709V97.7032C276.123 94.7392 274.506 92.5336 272.466 92.5336C270.426 92.5336 268.794 94.9616 268.794 97.9288L269.977 97.952C269.977 96.5432 270.483 95.64 271.197 95.64C271.906 95.64 272.49 96.7728 272.49 98.184L272.473 131.713H276.123V131.709Z" fill="#CC2229" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M146.006 131.709L146.023 98.18C146.023 96.7688 145.446 95.636 144.732 95.636C144.018 95.636 143.51 96.5408 143.51 97.948L142.33 97.9248C142.33 94.9592 143.962 92.5296 146.002 92.5296C148.04 92.5296 149.667 94.7352 149.667 97.6984L149.642 131.705H146.006V131.709Z" fill="#CC2229" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M137.1 136.658V140.91H283.629L287.559 136.749H263.554L263.594 79.5368H276.167L283.706 80.7528L287.601 77.721L276.123 75.8346L263.598 75.8492L270.821 34.043L255.181 73.0851L213.368 11.4569L212.21 11.3262L208.983 16.2339L211.359 16.7506L255.258 82.8968L255.249 136.658H137.1Z" fill="#CC2229" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M240.148 131.708V104.378C240.148 94.8928 236.172 87.5344 231.028 87.5344C226.326 87.5344 222.382 96.368 222.382 106.9V131.708H240.148ZM215.477 131.708V86.5344C215.477 77.0506 211.484 69.69 206.342 69.69C201.639 69.69 197.694 78.5261 197.694 89.0576L197.684 131.708H215.477ZM190.894 131.708V104.378C190.894 94.8928 186.902 87.5344 181.759 87.5344C177.057 87.5344 173.114 96.368 173.114 106.9L173.11 131.708H190.894Z" fill="#CC2229" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M179.526 87.9928C178.968 88.08 178.107 88.78 177.839 89.2552C182.863 91.7824 184.714 95.9848 184.714 104.314V133.482H187.632V106.796C187.63 95.3808 184.476 89.172 179.526 87.9928ZM204.106 70.1488C203.55 70.236 202.687 70.9353 202.418 71.4085C207.443 73.9381 209.29 78.1382 209.29 86.468V133.478H212.208V88.9496C212.21 77.5385 209.056 71.3275 204.106 70.1488ZM228.795 87.9928C228.238 88.08 227.375 88.78 227.106 89.2552C232.132 91.7824 233.978 95.9848 233.978 104.314V133.482H236.896V106.796C236.896 95.3808 233.744 89.172 228.795 87.9928Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M137.1 150.536V154.766H283.629L287.559 150.536H137.1Z" fill="#CC2229" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M56.2202 308.255H60.2129C63.5954 308.255 64.4503 308.583 64.4503 309.884C64.4503 310.237 64.4006 310.654 64.3072 311.134L64.2532 311.418H65.2016L66.237 305.885H65.4298C65.2286 306.238 64.7346 306.485 64.0457 306.574C62.9915 306.711 59.2147 306.834 54.639 306.875L53.5184 306.879C48.0981 306.879 45.2011 306.68 44.5434 306.258C44.4022 306.17 44.342 306.084 44.2818 305.885H43.4206L42.3831 311.418H43.2298C43.8586 309.014 45.4294 308.257 49.7831 308.257H53.0556V329.731C53.0556 331.976 52.4373 332.766 50.6838 332.766H50.2894V333.558C51.6778 333.416 52.0803 333.4 54.639 333.4C57.1935 333.4 57.5961 333.416 58.9865 333.558V332.766H58.5901C56.8366 332.766 56.2182 331.976 56.2182 329.731V308.255H56.2202ZM74.5377 320.114H88.7688V329.729C88.7688 331.962 88.1424 332.765 86.3976 332.765H86.0032V333.555C87.3936 333.414 87.7936 333.398 90.3528 333.398C92.9088 333.398 93.312 333.414 94.7024 333.555V332.765H94.308C92.5544 332.765 91.9336 331.974 91.9336 329.729V310.5C91.9336 308.255 92.552 307.464 94.308 307.464H94.7024V306.674C93.312 306.815 92.9088 306.831 90.3528 306.831C87.796 306.831 87.3936 306.815 86.0032 306.674V307.464H86.3976C88.1424 307.464 88.7688 308.267 88.7688 310.5V318.93H74.5377V310.5C74.5377 308.255 75.1561 307.464 76.9096 307.464H77.3039V306.674C75.9135 306.815 75.511 306.831 72.9544 306.831C70.3998 306.831 69.9973 306.815 68.6069 306.674V307.464H69.0012C70.7547 307.464 71.3731 308.255 71.3731 310.5V329.729C71.3731 331.974 70.7547 332.765 69.0012 332.765H68.6069V333.555C69.9973 333.414 70.3998 333.398 72.9544 333.398C75.511 333.398 75.9135 333.414 77.3039 333.555V332.765H76.9096C75.1561 332.765 74.5377 331.974 74.5377 329.729V320.114ZM98.8128 333.554H110.182C112.214 333.554 112.621 333.528 113.042 333.379C113.692 333.153 113.997 332.665 114.433 331.158C114.501 330.924 114.624 330.554 114.796 330.061L114.852 329.903L113.966 329.588L113.893 329.778C113.283 331.407 111.592 331.976 107.365 331.976H104.738V320.117H107.827C110.965 320.117 112.011 320.66 112.011 322.285V322.489H112.804V316.56H112.011V316.73C112.011 318.33 110.814 318.934 107.632 318.934H104.738V308.257H109.558C111.725 308.257 112.277 308.508 112.7 309.681L112.804 309.969L113.53 309.786L113.04 306.678H98.8112V307.469H99.2072C100.961 307.469 101.579 308.259 101.579 310.505V329.733C101.579 331.978 100.961 332.769 99.2072 332.769H98.8112V333.554H98.8128ZM42.0946 389.438L40.9637 390.253C42.5865 392.992 44.8878 394.119 48.8762 394.119C53.2528 394.119 57.2433 392.656 60.9495 389.689C66.401 385.33 69.5366 380.75 73.6081 371.198L73.8135 370.718C81.5312 365.922 87.3352 357.436 87.3352 350.943C87.3352 349.127 86.2352 347.787 84.7472 347.787C81.18 347.787 77.1338 353.186 72.9315 363.55L69.3706 372.318L69.2689 372.56L69.0697 372.682C65.351 374.911 64.1723 375.471 61.045 376.476C65.129 373.521 67.2145 369.974 67.2145 365.982C67.2145 361.431 64.4442 358.426 60.2523 358.426C53.342 358.426 46.8862 364.664 46.8862 371.34C46.8862 376.086 49.6606 379.15 53.9562 379.15C58.5092 379.15 65.1165 376.829 68.6733 373.975C63.9544 385.83 56.2638 392.936 48.1603 392.936C45.4647 392.932 43.3978 391.738 42.0946 389.438Z" fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M74.2328 369.149L74.4071 368.674L75.9324 364.239C79.7777 353.064 82.1912 348.833 84.7224 348.833C85.5608 348.833 86.1504 349.667 86.1504 350.86C86.148 356.295 81.0248 364.154 74.2328 369.149ZM49.7293 372.998C49.7293 369.302 51.3542 365.442 54.0332 362.797C56.0855 360.763 58.3786 359.594 60.3271 359.594C62.8526 359.594 64.4713 361.394 64.4713 364.195C64.4713 367.458 62.8547 371.434 60.3271 374.384C58.4533 376.574 56.1457 377.744 53.7115 377.744C51.3894 377.744 49.7293 375.766 49.7293 372.998Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M325.222 308.255H329.21C332.599 308.255 333.45 308.583 333.45 309.884C333.45 310.237 333.402 310.654 333.309 311.134C333.296 311.198 333.275 311.291 333.253 311.418H334.205L335.238 305.885H334.431C334.228 306.238 333.734 306.485 333.045 306.574C331.99 306.711 328.214 306.834 323.638 306.875L322.52 306.879C317.098 306.879 314.202 306.68 313.546 306.258C313.402 306.17 313.343 306.084 313.283 305.885H312.424L311.386 311.418H312.233C312.862 309.014 314.43 308.257 318.786 308.257H322.057V329.731C322.057 331.976 321.441 332.767 319.685 332.767H319.293V333.558C320.679 333.417 321.084 333.4 323.638 333.4C326.195 333.4 326.598 333.417 327.988 333.558V332.767H327.596C325.84 332.767 325.224 331.976 325.224 329.731V308.255H325.222ZM236.888 333.554H248.258C250.292 333.554 250.698 333.529 251.12 333.379C251.767 333.153 252.072 332.666 252.51 331.158C252.578 330.924 252.705 330.554 252.875 330.061L252.931 329.903L252.043 329.588L251.974 329.778C251.362 331.408 249.674 331.976 245.442 331.976H242.819V320.117H245.911C249.045 320.117 250.09 320.66 250.09 322.286V322.489H250.885V316.56H250.09V316.73C250.09 318.33 248.895 318.934 245.714 318.934H242.819V308.257H247.642C249.806 308.257 250.354 308.508 250.779 309.681L250.885 309.969L251.611 309.786L251.122 306.678H236.892V307.469H237.289C239.04 307.469 239.661 308.259 239.661 310.505V329.733C239.661 331.978 239.04 332.769 237.289 332.769H236.892V333.554H236.888ZM131.617 307.464H132.011C133.765 307.464 134.382 308.255 134.382 310.5V325.651C134.382 330.895 137.898 334.378 143.193 334.378C145.375 334.378 147.695 333.806 151.232 332.387C152.421 331.91 152.649 331.796 153.342 331.325L153.975 333.554C154.78 333.433 155.594 333.378 156.407 333.391C157.493 333.391 157.984 333.421 159.29 333.554V332.762H158.895C157.142 332.762 156.523 331.972 156.523 329.726V310.498C156.523 308.253 157.142 307.462 158.895 307.462H159.29V306.672C157.899 306.813 157.497 306.83 154.94 306.83C152.386 306.83 151.981 306.813 150.59 306.672V307.462H150.985C152.738 307.462 153.358 308.253 153.358 310.498V329.6C152.593 330.171 152.306 330.314 150.827 330.841C148.303 331.742 146.668 332.086 144.942 332.086C140.262 332.086 137.546 329.722 137.546 325.649V310.498C137.546 308.253 138.164 307.462 139.918 307.462H140.312V306.672C138.924 306.813 138.522 306.83 135.965 306.83C133.408 306.83 133.007 306.813 131.617 306.672V307.464ZM186.723 328.021L168.935 306.674C167.65 306.802 167.182 306.831 166.169 306.831C165.156 306.831 164.683 306.802 163.402 306.674V307.464H163.591C164.631 307.464 165.15 307.699 165.884 308.494L166.169 308.801V329.726C166.169 331.972 165.55 332.762 163.797 332.762H163.402V333.554C164.724 333.421 165.216 333.396 166.959 333.396C168.702 333.396 169.196 333.421 170.518 333.554V332.762H170.124C168.37 332.762 167.752 331.972 167.752 329.726V310.629L188.306 334.74V310.498C188.306 308.253 188.925 307.462 190.678 307.462H191.073V306.672C189.753 306.809 189.259 306.83 187.516 306.83C185.77 306.83 185.277 306.809 183.959 306.672V307.462H184.354C186.107 307.462 186.726 308.253 186.726 310.498V328.021H186.723ZM194.555 307.464H194.947C196.702 307.464 197.321 308.255 197.321 310.5V329.729C197.321 331.974 196.702 332.765 194.947 332.765H194.555V333.555C195.941 333.414 196.346 333.398 198.902 333.398C201.457 333.398 201.862 333.414 203.252 333.555V332.765H202.855C201.102 332.765 200.483 331.974 200.483 329.729V310.5C200.483 308.255 201.102 307.464 202.855 307.464H203.252V306.674C201.862 306.815 201.457 306.831 198.902 306.831C196.348 306.831 195.943 306.815 194.555 306.674V307.464ZM299.682 307.464H300.079C301.834 307.464 302.451 308.255 302.451 310.5V329.729C302.451 331.974 301.834 332.765 300.079 332.765H299.682V333.555C301.073 333.414 301.474 333.398 304.032 333.398C306.59 333.398 306.991 333.414 308.382 333.555V332.765H307.986C306.234 332.765 305.614 331.974 305.614 329.729V310.5C305.614 308.255 306.234 307.464 307.986 307.464H308.382V306.674C306.991 306.815 306.59 306.831 304.032 306.831C301.474 306.831 301.073 306.815 299.682 306.674V307.464ZM226.89 307.464H227.081C227.897 307.464 228.569 308.21 228.569 309.11C228.569 309.658 228.386 310.436 228.038 311.364L221.493 328.82L214.282 311.364C213.889 310.415 213.694 309.674 213.694 309.13C213.694 308.259 214.429 307.464 215.238 307.464H215.425V306.674C215.289 306.684 215.152 306.693 215.016 306.698C214.31 306.723 212.945 306.74 210.914 306.74C209.598 306.748 208.282 306.733 206.966 306.693L206.732 306.676V307.466H206.89C208.251 307.466 209.509 308.354 210.083 309.728L220.565 334.745L229.826 310.97C230.63 308.906 230.885 308.469 231.549 307.99C231.982 307.678 232.538 307.466 232.931 307.466H233.215V306.676C232.558 306.729 231.898 306.749 231.238 306.736L230.592 306.732L227.09 306.69L226.89 306.674V307.464ZM280.448 327.118L281.473 332.374C283.062 333.37 285.606 334.046 287.783 334.046C292.924 334.046 296.202 330.989 296.202 326.207C296.202 322.418 294.582 320.445 289.138 317.618C285.03 315.487 283.894 314.238 283.894 311.855C283.894 309.338 285.754 307.624 288.487 307.624C291.238 307.624 292.845 308.823 293.671 311.498L293.7 311.6H294.588L294.175 306.574H293.694C293.567 306.757 293.43 306.809 293.11 306.809C292.664 306.809 292.442 306.775 290.658 306.431C289.923 306.277 289.175 306.194 288.425 306.184C284.186 306.184 281.033 309.025 281.033 312.847C281.033 315.037 282.062 316.95 283.938 318.258C284.81 318.862 285.933 319.546 287.298 320.303C292.47 323.17 293.575 324.41 293.575 327.324C293.575 330.42 291.458 332.58 288.429 332.58C284.916 332.58 282.646 330.79 281.315 326.958L280.448 327.118ZM265.204 332.767H264.807C263.056 332.767 262.44 331.976 262.44 329.731V321.304H262.568C264.596 321.304 265.353 321.734 266.557 323.562L273.11 333.555L273.293 333.539C274.407 333.442 275.334 333.394 276.082 333.394C276.839 333.394 277.594 333.437 278.676 333.539L278.842 333.555V332.765H278.651C277.541 332.765 275.746 331.541 274.793 330.13L270.086 323.174C269.007 321.574 268.45 321.005 267.714 320.77C271.322 320.106 273.834 317.098 273.834 313.443C273.834 311.579 273.295 309.913 272.303 308.722C270.883 307.025 269.819 306.676 265.992 306.676H256.509V307.466H256.901C258.657 307.466 259.273 308.257 259.273 310.502V329.731C259.273 331.976 258.657 332.767 256.901 332.767H256.509V333.558C257.895 333.417 258.3 333.4 260.854 333.4C263.411 333.4 263.814 333.417 265.204 333.558V332.767Z" fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M262.439 308.259L262.618 308.234L263.63 308.077C264.347 307.961 265.07 307.894 265.795 307.878C268.87 307.878 270.508 309.807 270.508 313.422C270.508 318.129 268.481 320.118 263.678 320.118H262.438V308.259H262.439Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M358.626 307.541V306.754C358.03 306.802 357.498 306.81 355.635 306.81C354.326 306.81 353.423 306.798 352.922 306.769L352.728 306.753V307.539H352.918C353.815 307.539 354.199 307.79 354.199 308.39C354.198 308.539 354.176 308.688 354.134 308.832C354.098 308.991 354.043 309.146 353.973 309.294L348.656 318.094L343.379 309.294C343.242 309.034 343.162 308.746 343.145 308.452C343.145 307.921 343.582 307.541 344.182 307.541H344.373V306.754L343.964 306.779C343.462 306.809 342.242 306.821 340.312 306.821C338.803 306.821 337.714 306.805 337.046 306.774L336.807 306.757V307.543H337.44C338.349 307.543 339.009 308.062 339.876 309.465L346.243 319.73V329.778C346.243 332.011 345.626 332.798 343.883 332.798H343.491V333.584C344.878 333.443 345.274 333.426 347.82 333.426C350.362 333.426 350.758 333.443 352.145 333.584V332.798H351.748C350.005 332.798 349.393 332.011 349.393 329.778V319.73L355.643 309.465C356.474 308.095 357.174 307.543 358.079 307.543H358.626V307.541ZM305.775 353.462H309.768C313.152 353.462 314.007 353.786 314.007 355.091C314.007 355.44 313.959 355.857 313.862 356.337C313.844 356.433 313.826 356.529 313.81 356.625H314.758L315.792 351.088H314.985C314.786 351.441 314.291 351.688 313.602 351.778C312.549 351.914 308.772 352.037 304.196 352.078L303.074 352.086C297.655 352.086 294.76 351.883 294.104 351.462C293.959 351.373 293.901 351.287 293.841 351.088H292.982L291.944 356.625H292.791C293.42 354.218 294.989 353.465 299.34 353.465H302.614V374.938C302.614 377.179 301.994 377.974 300.242 377.974H299.846V378.765C301.237 378.619 301.638 378.607 304.196 378.607C306.754 378.607 307.155 378.619 308.546 378.765V377.974H308.149C306.398 377.974 305.777 377.179 305.777 374.938V353.462H305.775ZM229.382 365.318H243.616V374.936C243.616 377.169 242.987 377.972 241.24 377.972H240.847V378.762C242.238 378.618 242.638 378.605 245.197 378.605C247.75 378.605 248.156 378.618 249.546 378.762V377.972H249.15C247.394 377.972 246.778 377.178 246.778 374.936V355.703C246.778 353.462 247.394 352.672 249.15 352.672H249.546V351.877C248.156 352.022 247.751 352.038 245.197 352.038C242.64 352.038 242.238 352.022 240.847 351.877V352.672H241.24C242.987 352.672 243.616 353.47 243.616 355.703V364.133H229.382V355.703C229.382 353.462 230.002 352.672 231.754 352.672H232.15V351.877C230.764 352.022 230.359 352.038 227.801 352.038C225.249 352.038 224.846 352.022 223.455 351.877V352.672H223.848C225.603 352.672 226.224 353.462 226.224 355.703V374.936C226.224 377.178 225.603 377.972 223.848 377.972H223.455V378.762C224.846 378.618 225.246 378.605 227.801 378.605C230.358 378.605 230.764 378.618 232.15 378.762V377.972H231.754C230.002 377.972 229.382 377.178 229.382 374.936V365.318ZM254.288 378.761H265.658C267.692 378.761 268.098 378.736 268.52 378.586C269.167 378.356 269.472 377.873 269.914 376.362C269.982 376.127 270.101 375.762 270.275 375.264L270.331 375.106L269.443 374.791L269.374 374.982C268.762 376.61 267.074 377.183 262.846 377.183H260.219V365.32H263.311C266.445 365.32 267.494 365.863 267.494 367.488V367.696H268.286V361.767H267.494V361.933C267.494 363.533 266.295 364.137 263.114 364.137H260.219V353.465H265.042C267.206 353.465 267.758 353.711 268.179 354.888L268.286 355.172L269.011 354.99L268.522 351.881H254.293V352.676H254.689C256.44 352.676 257.061 353.466 257.061 355.708V374.94C257.061 377.182 256.44 377.976 254.689 377.976H254.293V378.761H254.288ZM318.164 378.761H329.534C331.566 378.761 331.97 378.736 332.395 378.586C333.042 378.356 333.348 377.873 333.786 376.362C333.854 376.127 333.977 375.762 334.151 375.264L334.202 375.106L333.318 374.791L333.25 374.982C332.638 376.61 330.949 377.183 326.718 377.183H324.094V365.32H327.186C330.32 365.32 331.366 365.863 331.366 367.488V367.696H332.157V361.767H331.366V361.933C331.366 363.533 330.17 364.137 326.99 364.137H324.094V353.465H328.918C331.082 353.465 331.63 353.711 332.055 354.888L332.157 355.172L332.887 354.99L332.398 351.881H318.168V352.676H318.56C320.316 352.676 320.932 353.466 320.932 355.708V374.94C320.932 377.182 320.316 377.976 318.56 377.976H318.168V378.761H318.164ZM186.696 373.226L168.906 351.879C167.623 352.012 167.152 352.041 166.139 352.041C165.127 352.041 164.658 352.012 163.374 351.879V352.674H163.562C164.602 352.674 165.121 352.904 165.855 353.699L166.139 354.006V374.936C166.139 377.178 165.521 377.972 163.768 377.972H163.374V378.762C164.695 378.626 165.187 378.605 166.93 378.605C168.675 378.605 169.167 378.626 170.489 378.762V377.972H170.095C168.342 377.972 167.723 377.178 167.723 374.936V355.834L188.278 379.946V355.703C188.278 353.462 188.898 352.672 190.651 352.672H191.046V351.877C189.724 352.014 189.232 352.038 187.489 352.038C185.746 352.038 185.25 352.014 183.93 351.877V352.672H184.324C186.078 352.672 186.698 353.462 186.698 355.703V373.226H186.696ZM273.811 372.326L274.841 377.582C276.43 378.578 278.97 379.253 281.151 379.253C286.283 379.253 289.57 376.191 289.57 371.41C289.57 367.621 287.946 365.648 282.502 362.822C278.395 360.694 277.258 359.441 277.258 357.062C277.258 354.542 279.118 352.827 281.85 352.827C284.602 352.827 286.213 354.026 287.034 356.702L287.063 356.807H287.951L287.538 351.778H287.062C286.933 351.96 286.794 352.016 286.474 352.016C286.028 352.016 285.806 351.978 284.022 351.634C283.286 351.483 282.538 351.402 281.788 351.391C277.549 351.391 274.398 354.228 274.398 358.05C274.398 360.244 275.424 362.158 277.3 363.461C278.171 364.064 279.29 364.749 280.659 365.506C285.835 368.377 286.941 369.614 286.941 372.531C286.941 375.623 284.822 377.783 281.79 377.783C278.282 377.783 276.007 375.992 274.673 372.166L273.811 372.326ZM99.5744 377.972V378.762C100.762 378.622 101.174 378.605 103.034 378.605C104.934 378.605 105.381 378.622 106.606 378.762V377.972H106.439C104.842 377.972 104.026 376.972 104.026 375.009C104.026 374.413 104.057 373.768 104.122 373.074L105.678 356.307L114.558 379.288L123.153 356.307L124.813 374.53C124.84 374.822 124.854 375.117 124.854 375.414C124.854 377.161 124.134 377.97 122.584 377.97H122.37V378.761L122.742 378.748L127.39 378.607L130.885 378.744L131.192 378.761V377.97H130.97C129.216 377.97 128.388 377.09 128.187 375.011L126.305 355.594C126.274 355.3 126.258 355.005 126.255 354.71C126.255 353.522 126.878 352.946 128.162 352.946H128.432V351.875L128.185 351.883C126.174 351.947 125.27 351.977 124.879 351.977C124.248 351.977 123.935 351.956 123.261 351.875L115.331 373.34L107.442 351.858C106.672 352.058 106.437 352.08 105.385 352.08C105.111 352.08 104.838 352.072 104.563 352.055L102.11 351.914L101.945 351.906V352.81H102.19C103.451 352.81 104.254 353.512 104.254 354.618C104.254 354.822 104.242 355.06 104.213 355.332L102.316 374.114C102.046 376.794 101.251 377.968 99.716 377.968H99.5744V377.972ZM218.594 376.175L218.946 372.276H218.112C217.062 375.681 213.561 377.825 209.05 377.825C202.691 377.825 197.942 372.297 197.942 364.884C197.942 357.604 202.285 352.693 208.72 352.693C213.053 352.693 216.607 354.811 217.305 357.812H218.206L217.832 351.879H217.025C216.952 352.176 216.728 352.265 216.068 352.265C215.338 352.265 214.532 352.192 213.665 352.058L211.982 351.786C210.758 351.59 209.534 351.493 208.326 351.493C199.93 351.493 193.97 357.37 193.97 365.658C193.97 373.651 199.734 379.155 208.108 379.155C211.306 379.155 215.761 377.891 218.594 376.175ZM134.514 378.761L134.753 378.744L137.631 378.603L140.92 378.761H141.062V377.97H140.682C139.916 377.97 139.39 377.329 139.39 376.397C139.39 375.951 139.498 375.389 139.669 374.922L141.455 370.07H151.244L153.211 375.067C153.373 375.476 153.521 376.278 153.521 376.742C153.511 377.065 153.378 377.373 153.149 377.601C152.919 377.83 152.611 377.962 152.288 377.97H152.066V378.761L152.232 378.744C153.478 378.638 154.727 378.591 155.978 378.603C157.584 378.603 159.03 378.646 160.31 378.744L160.526 378.761V377.97H160.201C159.086 377.97 157.841 376.937 157.243 375.517L147.306 351.875H142.421V352.67H142.61C143.591 352.67 144.232 353.23 144.902 354.668L145.431 355.807L137.818 374.718C137.042 376.648 135.875 377.868 134.736 377.954L134.514 377.97V378.761Z" fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M141.891 368.877L146.202 357.32L150.778 368.877H141.891Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M345.401 377.991H345.004C343.249 377.991 342.632 377.2 342.632 374.955V366.528H342.765C344.793 366.528 345.55 366.953 346.75 368.79L353.302 378.779L353.49 378.762C354.6 378.67 355.531 378.618 356.278 378.618C357.036 378.618 357.791 378.661 358.872 378.762L359.034 378.779V377.989H358.847C357.738 377.989 355.942 376.764 354.99 375.354L350.283 368.398C349.204 366.798 348.642 366.229 347.911 365.994C351.514 365.33 354.031 362.322 354.031 358.671C354.031 356.803 353.491 355.142 352.495 353.946C351.08 352.249 350.011 351.9 346.189 351.9H336.702V352.69H337.098C338.849 352.69 339.47 353.481 339.47 355.726V374.955C339.47 377.2 338.849 377.991 337.098 377.991H336.702V378.782C338.092 378.64 338.492 378.624 341.051 378.624C343.61 378.624 344.01 378.64 345.401 378.782V377.991Z" fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M342.632 353.483L342.814 353.458L343.827 353.301C344.543 353.185 345.266 353.118 345.992 353.102C349.063 353.102 350.705 355.031 350.705 358.65C350.705 363.353 348.673 365.342 343.871 365.342H342.63V353.483H342.632Z" fill="white" />
                  </svg>

                  <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                    2019 - Aualmente
                  </h3>

                  <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                    Bacharelado em Sistemas de Informação

                  </p>

                  <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                    Instituto Federal da Bahia (IFBA)

                  </p>
                </div>

              </div>

            </div>


            <div className="my-10 sm:my-14">
              <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
                Projetos de Pesquisa e Extensão
              </h2>

              <ul className="space-y-10">
                <li>
                  <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">
                    2024 - Atualmente
                  </p>
                  <h5 className="font-medium text-sm text-gray-800 dark:text-neutral-200">
                    Edital PIBIC-EM 2024 - Desenvolvimento de Aplicativo para Monitoramento e Alerta de Inundações na Cidade de Malhada, Bahia
                  </h5>
                  <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                    Projeto focado no desenvolvimento de um aplicativo para monitorar e alertar sobre inundações, com o objetivo de melhorar a resposta a emergências e a segurança da comunidade.
                  </p>
                  <p className="mt-1">
                    <a className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                      Continuar lendo
                    </a>
                  </p>
                </li>

                <li>
                  <p className="mb-2 text-sm text-gray-500 dark:text-neutral-500">
                    2023 - 2024
                  </p>
                  <h5 className="font-medium text-sm text-gray-800 dark:text-neutral-200">
                    Desenvolvimento do Sistema "O que é isso no meu Rótulo"
                  </h5>
                  <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                    Projeto PIBIC-EM para a criação de um sistema web que permite aos usuários consultar e entender os ingredientes presentes em rótulos de produtos alimentícios, corporais e saneantes.
                  </p>
                  <p className="mt-1">
                    <a className="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                      Continuar lendo
                    </a>
                  </p>
                </li>
              </ul>
            </div>



            <div className="my-10 sm:my-14">
              <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
                Contate-me
              </h2>


              <form>
                <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-gray-200 rounded-lg dark:border-neutral-700">
                  <div className="relative w-full">
                    <label className="sr-only">Contate-me</label>
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
                      <svg className="shrink-0 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <input type="text" id="hero-input" name="hero-input" className="py-2 ps-9 pe-3 block w-full border-transparent rounded-lg text-sm focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500" placeholder="Entre com seu email" />
                  </div>
                  <a className="w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200" href="#">
                    Enviar
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <p className="mt-2 text-xs text-gray-500 dark:text-neutral-500">
                  Sem burocracia, contrate <a href=""></a> qualquer momento.
                </p>
              </form>

            </div>

          </div>
        </main>



        <footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
            <div className="flex flex-wrap justify-between items-center gap-2">
              <div>
                <p className="text-xs text-gray-600 dark:text-neutral-400">
                  © 2024 Mateus data Labs.
                </p>
              </div>



              <ul className="flex flex-wrap items-center">
                <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                  <a className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                    X (Twitter)
                  </a>
                </li>
                <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-gray-400 dark:text-neutral-500 dark:before:bg-neutral-600">
                  <a className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                    Dribbble
                  </a>
                </li>
                <li className="inline-block pe-4 text-xs">
                  <a className="text-xs text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                    Github
                  </a>
                </li>
                <li className="inline-block">

                  <button type="button" className="hs-dark-mode hs-dark-mode-active:hidden relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-theme-click-value="dark">
                    <span className="sr-only">Dark</span>
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                  </button>
                  <button type="button" className="hs-dark-mode hs-dark-mode-active:flex hidden relative flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-theme-click-value="light">
                    <span className="sr-only">Light</span>
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path>
                      <path d="m17.66 17.66 1.41 1.41"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                      <path d="m6.34 17.66-1.41 1.41"></path>
                      <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                  </button>

                </li>
              </ul>

            </div>
          </div>
        </footer>






        <script src="https://cdn.jsdelivr.net/npm/Mateus data/dist/Mateus data.min.js"></script>
      </body>
    </div>
  )
}

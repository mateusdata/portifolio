import React from 'react'

export default function App() {
  return (
    <div>
      <body className="dark:bg-neutral-900 ">

        <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
          <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
            <div className="px-4 md:px-0 flex justify-between items-center">

              <div>
                <a className="flex-none rounded-md text-lg inline-block font-semibold focus:outline-none focus:opacity-80" href="../../templates/personal/index.html" aria-label="Mateus data">
                Portifolio
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
                    <img src="https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-2.png" alt=""  className='w-22 h-auto'/>
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
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm7DzFT6SJVW_hKBRRGjNrtHUr12-F6yXd1w&s" alt=""  className='w-22 h-auto'/>
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

                  
                  </div>

                </div>



                <div className="group relative flex gap-x-5">

                  <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                    <div className="relative z-10 size-6 flex justify-center items-center">
                    <img src="https://cnpj.biz/img/logo_cnpj_biz.png" alt=""  className='w-22 h-auto'/>
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
                    <img src="https://clinicasepam.com.br/wp-content/uploads/2021/06/O-que-e-terapia-da-fala-fono.png" alt=""  className='w-22 h-auto'/>
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
             
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZf163rytlzKg_Ia5G7oI-ER2S7O4AJJpCgQ&s" alt=""  className='h-16 w-auto'/>
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

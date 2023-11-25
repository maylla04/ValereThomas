import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  flex-col justify-between p-5">
      <header className="flex border-b-2 px-6 py-2 h-16">
        <h1 className="font-bold">Valerie Thomas</h1>
        <div className="grow">
          <div className="flex items-center justify-center gap-2 md:gap-8">
            <Link href="home">Home</Link>
            <Link href="home">About</Link>
            <Link href="home">Bio</Link>
            <Link href="home">Contact</Link>
          </div>
        </div>
        <div className="flex justify-center gap-2 md:gap-8">
          <Link href="register" className="mr-2 font-bold">Sign up</Link>
          <Link href="login" className="mr-2 font-bold">Login</Link>
        </div>
      </header>
      <center><h1 className="font-bold text-3xl p-8">CONHEÇA VALERIE THOMAS</h1></center>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2  sm:grid-cols-1 md:grid-cols-1 p-5  mt-5 ml-2 mb-5 mr-2 shadow-xl">
        
        <div className="flex flex-col">
        <h1 className='text-2xl p-5 font-semibold text-justify'>Valerie Thomas: criadora da tecnologia 3D</h1>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprimeirosnegros.b-cdn.net%2Fwp-content%2Fuploads%2F2021%2F10%2FDESTAQUE_Valerie-1.jpg&f=1&nofb=1&ipt=917d93c1f492b65e565253ee2f0054a8c380a33c0b07eb1fc75a79c1f43b3b98&ipo=images"/>
        </div>
        <div className="p-8">
          <div className="col-span-2  xl:ml-5 2xl:ml-5 mt-5">
          
          <p className='p-5 text-justify'>Valerie Thomas (nascida em Maio de 1943) é uma física norte-americana. 
          Apesar do pouco incentivo quando criança, a curiosidade de Valerie a levou para as ciências e depois de uma 
          graduação marcada por seu ótimo desempenho, começou a trabalhar na NASA. Em 1976, Thomas assistiu a uma palestra 
          que a inspirou a fazer experimentos com espelhos. Espelhos retos geram o reflexo de um objeto que parece estar 
          atrás da superfície do vidro. Já um espelho côncavo mostra um reflexo que parece existir em frente ao vidro, 
          trazendo a ilusão de que esta imagem existe de forma tridimensional. Thomas pensou que este método seria mais 
          eficiente para mostrar imagens de vídeo, tanto para televisões quanto para equipamentos científicos, e portanto, 
          desenvolveu e patenteou o seu transmissor de ilusão, que foi adotado pela NASA e é usado em cirurgias e na produção 
          de televisões e monitores. Thomas também contribuiu para a astronomia desenvolvendo programas para as pesquisas do 
          cometa Halley, da camada de ozônio e para tecnologia de satélites. Hoje em dia ela é pesquisadora associada na Universidade de Baltimore e 
          também faz parte de um programa científico que tutora jovens.</p>
         <p className='p-5'>Referências: <a className='hover:font-bold ' href='https://aulanapratica.wordpress.com/tag/valerie-thomas/'>Clique aqui</a></p>
          </div>
        </div>
      </div>
      <footer className="border-t-2 px-2 py-2 grid grid-cols-1  justify-between">
        <div className="p-5">
          <h1 className="font-semibold mb-5 ">Contato</h1>
          <a href="https://www.linkedin.com/in/maylla-nascimento-83a67a266/" ><p className="hover:font-semibold">Linkedin</p></a>
          
          <a href="maylla.nascimento@estudante.ifms.edu.br" ><p className="hover:font-semibold">Email: maylla.rie@gmail.com</p></a>
          <p className="">Feito por: Maylla Nascimento</p>
         
        </div>
        

        
        
        

      </footer>
    </main>
  )
}

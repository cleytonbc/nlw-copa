// interface HomeProps {
//   count: number
// }

import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa-preview.png'

export default function Home() {

  return (
    <div>
      <main>

      </main>

      <Image src={appPreviewImg} alt="Dois celulares exibindo ma prévia da aplicação móvel do NLWcoap" />
    </div>
  )
}


// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/pools/count');
//   const data = await response.json();

//   console.log(data);

//   return {
//     props: {
//       count: data.count
//     }
//   }
// }
import Image from 'next/image'

export default function Home() {
  return (
  <main><div className="banner">
  <div className=" banner-text">
    <h1 className='hover:animate-pulse'>Ansh Singh</h1>
    {/* <h3>Perfectly Centered</h3>
    <h6>No matter how many lines of text you use.</h6> */}
    <h3><a href="/projects" className="hover:opacity-80">Projects</a></h3>
    <h3><a href="/contact" className="hover:opacity-80">Contact</a></h3>
  </div>
</div></main>
  )
}

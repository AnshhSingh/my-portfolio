
export default function navigation(){
  return (
<nav className="relative select-none bg-grey lg:flex lg:items-stretch w-full">
  <div className="flex flex-no-shrink items-stretch h-12">
    
    <a href="/" className=" hover:opacity-75 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Home</a>
    <a href="/projects" className=" hover:opacity-75 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Projects</a>
    <a href="/contact" className=" hover:opacity-75 flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Contact</a>

  </div>
  <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
  
  </div>
</nav>
  );
}
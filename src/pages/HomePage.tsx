

const HomePage = () => {
  return (
    <div className=" flex flex-col gap-12">
    <div className=" bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className=" font-bold text-5xl tracking-tight text-yellow-600 ">
       Get a takeaway now
        </h1>
<span className=" text-xl"> Order now to get your food delivered in minutes!</span>
    </div>
    <div className=" grid md:grid-cols-2 gap-5">
        <img src= "/landing.png"/>
        <div className=" flex flex-col items-center justify-center gap-4 text-center">
            <span className=" font-bold tracking-tighter"> Experience Seamless Ordering</span>
            <span>Elevate your dining experience with Munchmate. Download our app for quicker and more convenient takeaway orders</span>
              <img src = "/appDownload.png"/>
        </div>

    </div>
    </div>
  )
}

export default HomePage
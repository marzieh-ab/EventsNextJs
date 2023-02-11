const EventPage=({data})=> {
  console.log(data)
    return (
      <div className='event_card'>
      <img src={data.image} width={1000} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* <input type="email"/>
      <button>Submit</button> */}
    </div>
    )
  }
  
  export default EventPage

  export async function getStaticPaths(){
    const {allEvents} = await import('../../../data/data.json');
    const allpaths=allEvents.map((path)=>{
      return {
        params:{
          cat:path.city,
          id:path.id


        }
       

      }
    })
    

    return {
      paths:allpaths,
      fallback:false
    }
    

  }

  export async  function  getStaticProps (context){

    const {allEvents} = await import('../../../data/data.json');
    const id=context?.params.id
    const data=allEvents.find(ev=>ev.id===id)
   
   
    return{
      props:{data}


    }
     
    

  }
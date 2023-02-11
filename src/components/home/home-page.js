import Link from "next/link";

export default function Homepage({data}) {
  return (
    <div className='home_body'>
    {data.map((ev) => (
      <Link
        key={ev.id}
        href={`/events/${ev.id}`}
        // style={{ display: "inline-block", width: "100%" }}
        passHref
      >
        <div className='card'>
          <img width={300} height={300} alt={ev.title} src={ev.image} />
          <div className='content'>
            <h1>{ev.title}</h1>
            <p>{ev.description}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
   
 
   
  )
}

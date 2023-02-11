import Link from "next/link";

const EventsCatPage = ({ data, PageName }) => {
  return (
    <div className='cat_events'>
      <h1>Events in {PageName}</h1>
      <div className='content'>
        {data.map(ev => (
          <div className='card'>
            <Link key={ev.id}  href={`/events/${ev.city}/${ev.id}`} passHref>
              <img width="100%" height={300} src={ev.image} alt={ev.title} />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("../../../data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("../../../data/data.json");
  const id = context?.params.cat;
  const data = allEvents.filter((ev) => ev.city === id);

  return {
    props: { data, PageName: id },
  };
}

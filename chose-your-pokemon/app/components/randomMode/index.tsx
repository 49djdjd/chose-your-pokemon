export async function getStaticProps() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    const pokemon = await res.json();
    return{
        props: {
            pokemon
        }
    };
}

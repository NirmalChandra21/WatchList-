export default function App() {
    const [movies, setMovies] = useState([]);
    const [watched, setWatched] = useState([]);
    const query = "intersteller";

    useEffect(function () {
        async function fetchMovies() {
            const res = await fetch(
                `http://www.omdbapi.com/?apikey=${KEY}&s=intersteller`
            );
            const data = await res.json();
            setMovies(data.Search);
            console.log(movies);
        }
        fetchMovies();
    }, []);
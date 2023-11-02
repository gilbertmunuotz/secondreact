import BlogList from "./BlogList";
import useDataFetch from "./useCustomHook";

const Home = () => {


    // const [name, setname] = useState('Lisu');

    // useEffect(() => {
    //     console.log('Love');
    //     console.log(name);
    // }, [name]);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setblogs(newBlogs);
    // }
    const url = 'http://localhost:8000/blogs'
    const { blogs, pending, error } = useDataFetch(url);

    return (
        <div className="home">
            {pending && <div>Loading....</div>}
            {error && <div> {error} </div>}
            {blogs && <BlogList passingBlogs={blogs} title="Hello! Reader Welcome" /*deletingBlog={handleDelete} */ />}
            {/* Note:title is directly used to pass multiple Prop */}
            {/* <BlogList passingBlogs={blogs.filter((blog) => blog.author === 'Andrew')} title="Andrew's Recipes" /> */}
            {/* Make sure you import the useState hook  from React to use the state and filter Method in the functional components.*/}
            {/* <button onClick={() => setname('Tundu')} >Change Name</button> */}
            {/* <p>{name}</p> */}
        </div >
    )
}

export default Home
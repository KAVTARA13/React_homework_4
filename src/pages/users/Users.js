import useFetch from '../../hook/useFetch';
import User from '../../components/list/user'

function Users() {
    const { data } = useFetch(
        `${process.env.REACT_APP_AUTH_URL}/users`,);
    return (
        <div >
             {data && <pre className="row row-cols-1 row-cols-md-3 g-4">{data.data.map((user) => (<User user={user} key={user.id}/>))}</pre>}          
        </div>
    );
}

export default Users;
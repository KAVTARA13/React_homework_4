import useFetch from '../../hook/useFetch';
import Resource from '../../components/list/resorce'

function Resources() {
    const { data } = useFetch(
        `${process.env.REACT_APP_AUTH_URL}/unknown`,);
    return (
        <div >
             {data && <pre >{data.data.map((resource) => (<Resource resource={resource} key={resource.id}/>))}</pre>}          
        </div>
    );
}

export default Resources;
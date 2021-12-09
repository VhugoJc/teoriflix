import Link from 'next/link';
import {Image} from 'antd';

function SingleProfile ({data}){
    const {img,name}=data;
    return (  
        <Link href={`/browse/${name}`}>
            <div className="profiles__avatar">
                <a><Image preview={false} className="profiles__avatar-img" src={img}/></a>
                <br/>
                <a><h3>{name}</h3></a>
            </div>
        </Link>
    );
}
 
export default SingleProfile;
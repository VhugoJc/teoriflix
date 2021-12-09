import HeaderLogin from '../HeaderLogin';
import SingleProfile from './SingleProfile';

const Profiles = () => {
    const avatarProfiles = [
        {
            img: "/img/Hugo.jpg",
            name: "Hugo"
        },
        {
            img: "/img/Andrés.jpg",
            name: "Andrés"
        },
        {
            img: "/img/Andre.jpg",
            name: "Andre"
        }
    ]
    return ( 
        <div>
            <HeaderLogin/> 
            <div className="profiles">
                <h2>¿Quién está viendo ahora?</h2>
                <div className="profiles__choose">
                {
                    avatarProfiles.map(item=>(
                    <SingleProfile key={item.name}  data={item} />
                    ))
                }
                </div>
            </div>
        </div>
        );
}
 
export default Profiles;
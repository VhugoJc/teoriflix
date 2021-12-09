import { useEffect, useState } from "react";
import SectionCarousel from './SectionCarousel';
const CarouselNetflix = ({data}) => {
    const[itemsList, setItemsList]=useState([]);
    let aux=1;
    let sections;

    useEffect(()=>{
        const totalItems = data.length;
        const maxItems = 5;
        sections = Math.ceil(totalItems/maxItems);//how much sections are needed.
        for(let i=0; i<sections; i++){
            if(totalItems-(i*maxItems)>=maxItems){
                setItemsList(oldArray=>[...oldArray, data.slice((i*maxItems),(maxItems*i)+maxItems)]);
            }else{
                setItemsList(oldArray=>[...oldArray, data.slice((totalItems-(i*maxItems))+1,totalItems)]);
            }
        }

    },[]);
    
    return(
        <div>
            {
                itemsList.length>0
                ?(
                    itemsList.map(item=>{
                        return(
                            <SectionCarousel dataSection={item} aux={aux} key={aux++} />
                        );
                    })
                )
                :null
            }
        </div>
    );  
}
 
export default CarouselNetflix;

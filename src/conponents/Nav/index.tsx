import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from 'react-icons/bi'
import NavItem from './NavItem';
import { useState } from 'react';
const defaultIconSize='1.5rem'
const items = [
    {label:'Home',icon:<BiHomeAlt size={defaultIconSize}/>,active:true},
    {label:'Movies',icon:<BiMoviePlay size={defaultIconSize}/>},
    {label:'About',icon:<BiInfoCircle size={defaultIconSize}/>},
]
const NavItemsContainer = ()=><>
    {items.map((item,index)=><NavItem item={item} key={index}/>)}
</>
const Index = ()=>{
    const [displayMenu,setDisplayMenu] = useState(true)
    return(
        <nav className="col-span-1 bg-cyan-200">
            <div className="mx-4 justify-between items-center flex md:block">
                <h4 className="uppercase font-bold text-primary py-4 border-b border-primary md:text-right text-xl">Phimmoi.net</h4>
                <BiMenu size={defaultIconSize} className="md:hidden cursor-pointer" onClick={()=>{setDisplayMenu(!displayMenu)}}/>
            </div>
        
            <ul className={`${displayMenu?'block':'hidden'} mx-4 my-2 md:block`}>
                <NavItemsContainer/>
            </ul>
        </nav>
    )
}
export default Index
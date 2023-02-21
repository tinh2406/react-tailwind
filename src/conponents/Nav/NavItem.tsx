const NavItem = ({item}:{item:Item})=>{
    return(
        <li className={`flex p-2 justify-end items-center cursor-pointer ${item.active?' bg-primary text-white' : ''}`}>
                    <h3 className='text-2xl mr-2'>{item.label}</h3>
                    {item.icon}
                </li>
    )
}
export default NavItem

export interface Item{
    label:string,
    icon:JSX.Element;
    active?:boolean
}
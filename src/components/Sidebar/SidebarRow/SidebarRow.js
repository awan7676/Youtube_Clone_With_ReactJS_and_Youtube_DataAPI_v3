import './SidebarRow.css';
const SidebarRow = ({ Icon, title, selectedCategory, setSelectedCategory }) => {
    return (
        <div className={`sidebarRow ${selectedCategory === title && 'selected'}`} onClick={() => setSelectedCategory(title)} >
            <Icon className='sidebarRow__icon' />
            <h2 className='sidebarRow__title'>{title}</h2>
        </div>
    )
}

export default SidebarRow
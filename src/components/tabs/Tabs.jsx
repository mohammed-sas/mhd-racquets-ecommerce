
import { useFilter } from '../../context';
import classes from './tabs.module.css';
const Tabs = ({pageNum,setPageNumber}) => {
    const {filterDispatch} = useFilter();
    return (
        <span className={classes['page-tab']} onClick={()=>filterDispatch({type:"UPDATE_PAGE",payload:pageNum-1})}>
            {pageNum}
        </span>
    )
}

export default Tabs

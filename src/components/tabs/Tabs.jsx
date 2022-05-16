
import { useFilter } from '../../context';
import classes from './tabs.module.css';
const Tabs = ({pageNum}) => {
    const {filterDispatch,state} = useFilter();
    return (
        <span className={`${classes['page-tab']} ${state.currentPageNumber=== pageNum-1 ? classes["active"]: ""}`} onClick={()=>filterDispatch({type:"UPDATE_PAGE",payload:pageNum-1})}>
            {pageNum}
        </span>
    )
}

export default Tabs

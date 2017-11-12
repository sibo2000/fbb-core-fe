const FilterLink = ({
    filter, name
}) => {
    return (
        <a href="#"
            onClick={ e => {
                    e.preventDefault();
                    store.dispatch({
                        type:'SET_FILTER',
                        filter
                    })
                }
            }>
            {name}
        </a>
    )
}
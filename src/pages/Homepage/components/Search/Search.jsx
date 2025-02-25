import styles from './Search.module.scss';

function Search({ setFilter }) {

    function handleInput (e) {
        const filter = e.target.value;
        setFitler(filter.trim().toLowerCase());
    }
    return (
        <div className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.searchBar} `}>
            <i className='fa-solid fa-magnifying-glass mr-15'></i>
            <input
                className='flex-fill'
                type='text'
                placeholder='Rechercher'
                onInput={ handleInput }
            />
        </div>
    )
}

export default Search;
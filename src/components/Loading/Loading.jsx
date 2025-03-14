import styles from './Loading.module.scss';

function Loading () {

    return (
        <div className='d-flex flex-row all-center flex-fill'>
            <i className= {`fa-solid fa-spinner ${styles.spinner} `}></i>
        </div>
    )
}

export default Loading;
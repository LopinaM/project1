import preloader from '../../../assets/images/loader.gif';

let Preloader = (props) => {
    return <div style={{ backgroundColor: 'white' }} >
        <img csr={preloader} />
    </div>
}
export default Preloader;
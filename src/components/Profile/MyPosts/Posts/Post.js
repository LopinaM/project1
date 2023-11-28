import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src='https://cdn121.picsart.com/212677724003202.jpg' />
                {props.message}
                <div>
                    <span>like</span>{props.likesCount}
                </div>
            </div>
        </div>
    )
}

export default Post;
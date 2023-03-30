import { useRouter } from "next/router";

const Post = (title) => {
    const router = useRouter();
    const { id } = router.query;

    console.log(id);

    return (
        <div>
            <p>title: {title}</p>
            <p>id : {id}</p>
        </div>


    )
}

export async function getServerSideProps(context) {
    return {
        props: { title: 'hello' },
    }
}

export default Post;
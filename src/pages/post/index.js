const Page = ({ articles }) => {
    return (
        <div>
            <h1>Posts</h1>


            {
                articles ?
                    articles.map(article => <Post post={article} key={article.id} />)
                    : null
            }


        </div>
    )
}

const Post = ({ post }) => {

    return (
        <article key={post.id}>
            <h2>{post.title}</h2>

            <section>{post.content}</section>
        </article>
    )
}

export async function getServerSideProps(context) {
    const url = `http://api.sunmoon.zone/site/blog/article/v0/latest/begin/${new Date().getTime()}`;
    console.log(`url: ${url}`)

    const res = await fetch(url);
    const json = await res.json();
    const articles = json.returnObject;

    console.log(articles);


    return {
        props: {
            articles: articles,
        },
    }
}


export default Page;
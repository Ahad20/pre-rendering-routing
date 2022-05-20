import { useRouter } from "next/router";

const PostPage = () => {
  const router = useRouter();
  const postId = router.query.postId;

  return <h1>post - {postId}</h1>;
};

export default PostPage;

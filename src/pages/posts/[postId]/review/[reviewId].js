import { useRouter } from "next/router";

const PostPage = () => {
  const router = useRouter();
  const { reviewId, postId } = router.query;
  console.log(router.query);
  return (
    <h1>
      review - {reviewId} for post - {postId}
    </h1>
  );
};

export default PostPage;

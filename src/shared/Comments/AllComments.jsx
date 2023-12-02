import useComments from "../../hooks/useComments";
import Comment from "./Comment";

const AllComments = () => {
  const [comments] = useComments();
  
  console.log(comments);

  return (
    <div className="py-20 mx-auto flex justify-center">
      <div className="grid grid-cols-1 gap-5 items-center justify-center">
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default AllComments;

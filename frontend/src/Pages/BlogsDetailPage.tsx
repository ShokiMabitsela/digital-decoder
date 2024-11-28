
import BlogDetails from "../Components/BlogDetails"
import Hero from "../Components/Hero"


const BlogsDetailPage = () => {
  return (
    <div>
      <Hero isBlog={true} className="opacity-100"/>
     
      <BlogDetails/>
    </div>
  )
}

export default BlogsDetailPage

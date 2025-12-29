import Card from "./Card"

const Blog = ()=>{

    const blogs = [
    {
      title: "Title of blog 1",
      content: "Content of blog 1"
    },
    {
      title: "Title of blog 2",
      content: "Content of blog 2"
    },
    {
      title: "Title of blog 3",
      content: "Content of blog 3"
    },
    {
      title: "Title of blog 4",
      content: "Content of blog 4"
    }
  ]

  return (
     <div className="blog">
      {blogs.map(ele => {
     return <Card 
     title={ele.title}
     content={ele.content}
     />
      }
     )}
    </div>
  )
}

export default Blog

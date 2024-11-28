import CardComponents from './CardComponents';
import Pagination from './Pagnation';

const Blogs = () => {
  return (
          <div className="mt-5 px-6">
          {/* Header Section */}
          <div className="w-full bg-[#b0764d] flex justify-center py-4 shadow-md">
            <h1 className="text-2xl font-bold text-white uppercase">Blogs</h1>
          </div>
    
          {/* Card Section */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            {/* Reusable Cards */}
            <CardComponents />
            <CardComponents />
            <CardComponents />
            <CardComponents />
            <CardComponents />
            <CardComponents />
          </div>
          <Pagination currentPage={1} totalPages={20} onPageChange={3}/>
        </div>
  )
}

export default Blogs

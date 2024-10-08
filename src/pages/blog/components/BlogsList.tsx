import { PostModel } from "../../../lib/domains/post";
import { useGetPostQueryListQuery } from "../../../lib/queries/blog/useGetPostListQuery";
import BlogCard from "../../home/components/blog/BlogCard";
import { Button } from "../../../shared/components/buttons/Button";

export  default function BlogsList(){
    const { data: blogList } = useGetPostQueryListQuery();

    return (
       <section>
        <div className="z-40 flex justify-between w-full gap-2 p-4 mx-auto">
                  <input type="text" placeholder="Search" className="w-1/4 h-10 px-5 text-sm text-black border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black" />
                  <div className="flex justify-end w-2/5 gap-2">
                  <select name="cars" id="cars" className="w-3/6 h-10 px-5 text-sm text-black border-2 border-gray-300 rounded-lg focus:outline-none focus:border-black" >
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <Button className="mt-0 rounded-lg" variant="gradient" size="sm" >Filter</Button>
                  </div>
                  
                </div>
        <div className="flex w-full gap-6 px-4 flex-col-3 md:flex-row md:py-6 lg:flex-row lg:flex-wrap lg:justify-center">
        {blogList?.map((item: PostModel,) => (
                        <div className="h-full pb-5 mx-auto lg:w-1/4 sm:w-full">
                    <BlogCard key={item.id} item={item} />
                    </div>
                ))}
        </div>
       </section>
    )
}
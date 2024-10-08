import { Card } from "flowbite-react";
import { PostModel } from "../../../../lib/domains/post";
import { CategoryModel } from "../../../../lib/domains/category";
import { formatDate } from "../../../../utils";
import { CircleUser } from "lucide-react";

export default function BlogCard({ item }: { item: PostModel }){
    const id=item.id;
    const date=formatDate(item?.publishedDate.toString())
    return (
    <Card className="max-w-lg bg-gray-100 h-96">
    <div className="flow-root">
        <div className="py-3 border-gray-200 sm:py-4 dark:border-gray-700">
            <div className="flex items-center mb-8 space-x-4">
                <div className="flex-shrink-0">
                    <span
                    >
                        <CircleUser size={38} strokeWidth={2} color="black" />
                    </span>
                </div>
                <div className="flex-1">
                    <p className="text-black text-md ">Posted by</p>
                    <p className="font-bold text-black text-md">{item.author?.name}</p>
                </div>
                <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="13" y1="18" x2="19" y2="12" />
                    <line x1="13" y1="6" x2="19" y2="12" />
                </svg>

                <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="5" y1="12" x2="11" y2="18" />
                    <line x1="5" y1="12" x2="11" y2="6" />
                </svg>
            </div>
        </div>
    </div>
    <p className="mb-2 text-sm font-medium text-black">{date}</p>
    <a href={`/blog-detail/${id}`}><p className="justify-center mb-2 text-base text-xl font-bold text-black">{item.title}</p></a>
    
    <div className="flex flex-row gap-4">
        {item?.categories?.map((category: CategoryModel, index: number) => (
          <button
            key={index}
            className="items-center justify-center h-6 text-black bg-gray-200 rounded-lg w-28"
          >
            <div className="text-xs">{category.name}</div>
          </button>
        ))}
    </div>
</Card>)
}
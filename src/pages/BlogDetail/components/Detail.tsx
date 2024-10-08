import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../../lib/queries/blog/useGetPostByIdQuery';
import { formatDate } from '../../../utils';
import { CategoryModel } from '../../../lib/domains/category';

export default function Detail() {
    const { id: postId } = useParams();
  
    const { data: postDetail} = useGetPostByIdQuery(postId as string, { enabled: !!postId });
    const date=formatDate(postDetail?.publishedDate.toString() as string)

    console.log(postDetail);
    
    return (
        <section className="py-4 bg-transparent">
            
                <div key={postDetail?.id}>
                    <div className="flex-col justify-center gap-4 px-5 my-auto h-4/5 lg:flex lg:flex-row">
                        <div className=" lg:w-full sm:w-[75%] sm:px-11 mx-auto">
                            <div className="flex flex-col justify-end h-full pb-5 ">
                            {postDetail?.categories?.map((category: CategoryModel,  index: number) => (
                            <p key={index} className="pt-4 text-xs">
                                    {category?.name} </p>
                            ))}
                                
                                <h1 className="pt-2 font-bold text-md lg:w-3/4 2xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl">
                                    {postDetail?.title}</h1>
                                <p className="pt-4 pb-4 text-xs">
                                    {postDetail?.shortNote}</p>
                                <div className="flow-root">
                                    <div className="py-3 border-gray-200 sm:py-4 dark:border-gray-700">
                                        <div className="flex items-center mb-8 space-x-4">
                                            <div className="flex-shrink-0">
                                                <img
                                                    alt="Neil image"
                                                    src="/images/cardprofile/Avatar.png"
                                                    className="w-12 h-12 rounded-full"
                                                />
                                            </div>
                                            <div className="flex sm:flex-col md:flex-col">
                                                <div className="flex gap-4">
                                                    <div className="">
                                                        <p className="text-sm text-black sm:text-xs md:text-xs">Posted by</p>
                                                        <p className="text-sm font-medium text-black sm:text-xs md:text-xs">{postDetail?.author?.name}</p>
                                                    </div>
                                                    <div className="flex-2 sm:flex-1 md:flex-2">
                                                        <p className="text-sm text-black sm:text-xs md:text-xs">Published</p>
                                                        <p className="text-sm font-medium text-black sm:text-xs md:text-xs">{date}</p>
                                                    </div>
                                                    <div className="flex-4">
                                                        <p className="text-sm text-black sm:text-xs md:text-xs">25 comments</p>
                                                        <p className="text-sm font-medium text-black sm:text-xs md:text-xs">Join the Conversation</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="flex justify-center lg:h-[35rem] w-full lg:ml-10">
                        <img className='flex justify-center' src={`${import.meta.env.VITE_BASE_URL}/${postDetail?.imagePath}`} alt="" />
                        
                    </div>

                    <div className='px-12 pt-6'>
                         <div className='text-sm' dangerouslySetInnerHTML={{ __html: postDetail?.description as string}}></div>
                    </div>
                    <div className="flex flex-col px-12 pt-4 md:flex-row">
                        <div className="flex gap-4 ">
                            <div className="pb-2">
                                <p className="text-sm text-black">Tagged with:</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                            {postDetail?.tags?.split(/[ ,.!?]+/).filter(Boolean).map((tag) => (
             <button className="w-20 h-6 text-xs rounded text-slate-950 bg-slate-300 border-1">
             {tag}
         </button>
        ))}
                               
                            </div>
                        </div>
                    </div>
                    <div className='px-1 py-10 lg:px-12'>
                        <div className=" bg-slate-100">
                            <div className="py-3 border-gray-200 sm:py-4 dark:border-gray-700">
                                <div className="flex items-center px-6 mb-8 space-x-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            alt="Neil image"
                                            src="/images/cardprofile/Avatar.png"
                                            className="w-12 h-12 rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <div>
                                            <p className="text-sm font-medium text-black">{postDetail?.author?.name}</p>
                                            <p className='pt-1 text-sm'>UI Designer · Interactive Media</p>
                                            <p className='pt-1 text-sm '>Digital content wrangler | UX enthusiast | Recovering educator | Shameless nerd & GIF connoisseur | Hockey fan | Oxford comma or death.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            
        </section>
    );
}

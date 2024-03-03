import React from 'react'
import Victoria1 from '../../../photos/portfolio/VICTORIA-59.jpg'
import Victoria2 from '../../../photos/portfolio/VICTORIA-40.jpg'
import Victoria3 from '../../../photos/portfolio/VICTORIA-41.jpg'
import Victoria4 from '../../../photos/portfolio/VICTORIA-42.jpg'
import Victoria5 from '../../../photos/portfolio/VICTORIA-43.jpg'
import Victoria6 from '../../../photos/portfolio/VICTORIA-35.jpg'
import Victoria7 from '../../../photos/portfolio/VICTORIA-37.jpg'
import WorkingProcessImg from './WorkingProcessImg'
type Props = {}


const description = "At our photography studio, quality is not just a standard; it's our hallmark. From the first client consultation to the final delivery of breathtaking images, our working process exudes meticulous attention to detail and unwavering dedication to craftsmanship. With a focus on personalized service, creative expertise, and cutting-edge techniques"

function WorkingProcess({ }: Props) {
    return (
        <section className='my-10  mx-auto w-full xl:w-10/12 lg:w-full md:w-full sm:w-full'>
            <div className='text-center w-11/12 sm:w-11/12 md:10/12 lg:w-8/12 xl:w-7/12 mx-auto mb-14  '>
                <h1 className='font-extrabold boujee-text text-5xl pb-4 '>Working Process</h1>
                <p className='font-semibold text-slate-600 text-lg '>{description}</p>
            </div>
            <div className='grid :sm:grid md:flex lg:flex xl:flex gap-8  w-11/12 sm:w-11/12 md:11/12 lg:w-10/12 xl:w-9/12 mx-auto'>

                <ul className="w-full sm:w-full md:w-2/4 lg:w-2/4 xl:w-2/4 mx-auto grid justify-start gap-4">
                    <li className=" flex flex-col justify-start items-start w-full ">
                        <span className='w-full  my-2 font-bold text-xl flex justify-start items-center gap-2 '><label className='boujee-bg text-white p-2 rounded-full w-10 h-10  grid justify-center items-center'>1</label><h3 className='boujee-text text-3xl'>Client Consultation</h3></span>
                        <ul className={'list-disc text-slate-600 font-semibold list  marker:text-blue-500 mt-2 pl-2  '}>
                            <li>Meet with clients to discuss their photography needs, preferences, and vision</li>
                            <li>{`Discuss logistics such as location, date, time, and any special requests.`}</li>
                            <li>Provide guidance on styling, wardrobe, and props if needed...</li>
                        </ul>
                    </li>

                    {/*  */}
                    <li className="flex flex-col justify-start items-start w-full">
                        <span className=' font-bold text-xl flex justify-start items-center gap-2  my-2 '><label className='boujee-bg text-white p-2 rounded-full w-10 h-10 text-center grid justify-center items-center'>2</label><h3 className='boujee-text text-3xl'>Pre-Production Planning</h3></span>
                        <ol className={'list-disc text-slate-600 font-semibold marker:text-blue-500 mt-2  pl-2 '}>
                            <li>Develop a detailed plan based on the consultation, including shot lists, lighting setups, and equipment requirements.</li>
                            <li>Coordinate with other team members such as assistants, stylists, or makeup artists if necessary.</li>
                            <li>{`Scout locations for outdoor shoots or prepare the studio space, ensuring it's equipped and set up appropriately for the shoot.`}</li>

                        </ol>
                    </li>
                    {/*  */}
                    <li className="flex flex-col justify-start items-start w-full">
                        <span className=' font-bold text-xl flex justify-start items-center gap-2   my-2'><label className='boujee-bg text-white p-2 rounded-full w-10 h-10 text-center grid justify-center items-center '>3</label><h3 className='boujee-text text-3xl'>Photoshoot Execution</h3></span>
                        <ol className={'list-disc text-slate-600 font-semibold marker:text-blue-500 mt-2  pl-2 '}>
                            <li>Set up the studio or location according to the pre-production plan.</li>
                            <li>Direct and pose subjects to achieve desired compositions and expressions.</li>
                            <li>Utilize professional lighting techniques to create the desired mood and ambiance.</li>

                        </ol>
                    </li>
                    <li className="flex flex-col justify-start items-start w-full">
                        <span className=' font-bold text-xl flex justify-start items-center gap-2  my-2'><label className='boujee-bg text-white p-2 rounded-full w-10 h-10 text-center grid justify-center items-center'>4</label><h3 className='boujee-text text-3xl'>Post-Production and Delivery</h3></span>
                        <ol className={'list-disc text-slate-600 font-semibold marker:text-blue-500 pl-2 mt-2 '}>
                            <li>Select the best images from the shoot for further processing.</li>
                            <li>Retouch and edit selected photos to enhance their quality and aesthetics.</li>
                            <li>Utilize professional lighting techniques to create the desired mood and ambiance.</li>
                            <li>Deliver the final images to clients in the agreed-upon format and within the specified timeframe.</li>

                        </ol>
                    </li>
                </ul>
                <div className='w-full sm:w-full md:w-2/4 lg:w-2/4 xl:w-2/4  grid grid-cols-3 justify-center items-center gap-2 mt-3 grid-rows-4  min-h-[700px]   mx-auto min-w-[300px]'>
                    {/* image grid 1 */}
                    <WorkingProcessImg image={Victoria2} styling='rounded col-span-2 row-span-2 w-full h-full bg-center bg-cover' />
                    <WorkingProcessImg image={Victoria5} styling='rounded  w-full h-full bg-center bg-cover' />
                    <WorkingProcessImg image={Victoria3} styling='rounded  w-full h-full bg-center bg-cover' />
                    <WorkingProcessImg image={Victoria4} styling='rounded row-span-1 col-span-1  w-full h-full bg-center bg-cover' />
                    <WorkingProcessImg image={Victoria7} styling='rounded  col-span-2 row-span-1 w-full h-full bg-center bg-cover' />
                    <WorkingProcessImg image={Victoria1} styling='rounded  col-span-2 row-span-1 w-full h-full bg-center bg-cover' />
                    <WorkingProcessImg image={Victoria6} styling='rounded  col-span-1 row-span-1 w-full h-full bg-center bg-cover' />
                </div>

            </div>
        </section>
    )
}

export default WorkingProcess
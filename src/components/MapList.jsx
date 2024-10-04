import React, {useState} from "react"
import { FiArrowUpRight } from "react-icons/fi";

const MapList = () => {
  const [type, setType] = useState('events')
  
  console.log(type)
  return (
    <div className="flex flex-col bg-white w-[30%] h-[75%] absolute top-[7%] left-[3%] rounded-lg p-4">
      <p className="flex flex-col font-[700] text-[1.7rem]">Discover Aseer</p>
      <p className="flex flex-col text-sm mt-[0.8rem] mb-[0.6rem]">
        Explore Aseer with our interactive tourist map and easily plan your
        trip.
      </p>
      <div className="dropdown flex gap-4">
        <form className="w-[50%]">
          <select
            id="categories"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="all">Select Category</option>
            <option value="events">
              Events
            </option>
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        </form>
        <form className="w-[50%]">
          <select
            id="countries"
            className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Select destination</option>
            <option value="abha">Abha</option>
            <option value="al birk">Al Birk</option>
            <option value="bisha">Bisha</option>
            <option value="rijal almaa">Rijal Almaa</option>
          </select>
        </form>
      </div>

      <div className="list_bottom mt-[2.5rem] h-[100%] w-full overflow-y-auto">
        <div className="w-full overflow-hidden">
        {/* List item starts */}
          <div className="item flex items-center gap-4 mb-6 pb-6 border-b-2 ">
            <div className="item_image w-[35%]">
              <img
                src="/Assets/images/discover/image-2.webp"
                alt=""
                className="w-[160px] h-[110px] rounded-lg"
              />
            </div>
            <div className="w-[60%]">
              <h2 className="font-[700]">Al-Shabah Tourism Farm</h2>
              <p className="text-[.7rem] mt-2 leading-normal two-lines  overflow-y-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae eaque repellat temporibus quae amet, nostrum enim,
                mollitia inventore doloribus, dolores non laudantium. Magnam
                amet aspernatur corrupti odio cupiditate, veritatis omnis?
              </p>
              <div className="flex items-center gap-2 cursor-pointer mt-3">
                <span className="text-sm">Details</span>
                <i className="text-blue-700 text-lg">
                  <FiArrowUpRight />
                </i>
              </div>
            </div>
          </div>
         {/* list item ends */}

        
        </div>
      </div>
    </div>
    
  )
  
}

export default MapList

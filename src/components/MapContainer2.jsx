import React, { useEffect, useRef, useState, useCallback } from "react"
// import MapList from './MapList'
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { createRoot } from "react-dom/client"

import { FiArrowUpRight } from "react-icons/fi"
import { GiFallingStar } from "react-icons/gi"
import { LuUtensilsCrossed } from "react-icons/lu";
import { FaBed } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"

const MapContainer2 = () => {
  const [type, setType] = useState("Events")
  const [data, setData] = useState([])
  const [destination, setDestination] = useState("all")
  const [filteredData, setFilteredData] = useState([])
  const [cities, setCities] = useState([])
 

  // Refs for map instance and map container
  const mapRef = useRef()
  const mapContainerRef = useRef()
  const markersRef = useRef([]) // To store markers
  const activePopupRef = useRef(null)

  // Initialize the map when the component mounts
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYWZuYW5tazAyIiwiYSI6ImNtMXBlOWc0eDAza3kyd3F6emZpNGh5Mm4ifQ.eWuuKpwmXMSlzYPKkWPdWQ"
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [43.0512, 18.2284],
      zoom: 7.14,
      style: "mapbox://styles/mapbox/streets-v12",
    })

    mapRef.current = map

    // Clean up on component unmount
    return () => {
      map.remove()
    }
  }, [])

  // Fetch data from API when the map is ready

  const fetchData = useCallback(async () => {
    try {
      // Fetch events data
      const eventsResponse = await fetch(
        "https://discoveraseer.com/api/collections/experience/entries?filter[published:is]=true&filter[locale:is]=english&filter[event_seasons:in]=summer-season|saudi-national-day94&filter[hide_from_interactive_map:is]=false&sort=start_date"
      )
      if (!eventsResponse.ok) {
        throw new Error("Network response was not ok")
      }
      const eventsData = await eventsResponse.json()

      // Fetch places data
      const placesResponse = await fetch(
        "https://discoveraseer.com/api/collections/place/entries?filter[published:is]=true&filter[locale:is]=english&filter[hide_from_interactive_map:is]=false"
      )
      if (!placesResponse.ok) {
        throw new Error("Network response was not ok")
      }
      const placesData = await placesResponse.json()

      // Normalize events data
      const normalizedEvents = eventsData.data.map((event) => ({
        id: event.id,
        title: event.title,
        description: event?.description,
        latid: Number(event?.latid),
        longit: Number(event?.longit),
        image: event.hero_image?.permalink || "",
        category: event?.type?.title || "",
        cityTitle: event.city?.title || "",
      }))

      // Normalize places data
      const normalizedPlaces = placesData.data
      .filter((place) => place?.type[0]?.title?.toLowerCase() !== "support services")
        .filter(
          (place) =>
            !["destinations", "attractions", "support services"].includes(
              place?.type?.title?.toLowerCase()
            )
        )
        .map((place) => ({
          id: place.id,
          title: place.title,
          description: place?.content,
          latid: Number(place?.latitude),
          longit: Number(place?.longitude),
          image: place.image?.permalink || "",
          category: place?.type?.title || "",
          cityTitle: place?.city?.length > 0 ? place?.city[0]?.title : ""
        }))

      // Combine the two datasets
      const combinedData = [...normalizedEvents, ...normalizedPlaces]
      const filtered = combinedData.filter((item) => item.longit && item.latid)

      setData(filtered)
      setFilteredData(filtered) // Initially display all data
      console.log(filteredData)
    } catch (error) {
      console.log(error)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchCities = useCallback(async () => {
    try {
      const response = await fetch("/cities.json") // Update with the actual path to your cities.json file
      const citiesData = await response.json()
      setCities(citiesData)
    } catch (error) {
      console.error("Error fetching city data:", error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    fetchCities()
  }, [fetchCities])

  // Filter data by destination and category when the destination and category changes
  useEffect(() => {
    let updatedData = data

    //  Filter by category (type)
    if (type !== "all") {
      updatedData = updatedData.filter(
        (item) => item.category.toLowerCase() === type.toLowerCase()
      )
    }

    //  Filter by destination
    if (destination !== "all") {
      updatedData = updatedData.filter(
        (item) =>
          item.cityTitle && item.cityTitle.toLowerCase() === destination.toLowerCase()
      ) // Filter by destination
    }

    //   console.log("Filtered data: ", updatedData);
    setFilteredData(updatedData)

    if (mapRef.current) {
        mapRef.current.flyTo({
          zoom: 7.14, // Default zoom level
          essential: true, // This animation is considered essential with respect to performance
        });
      }
  }, [type, destination, data])

  // Add markers to the map when `data` is updated
  useEffect(() => {
    if (mapRef.current && filteredData.length > 0) {
      markersRef.current.forEach((marker) => marker.remove()) // Rmeove existing markers
      
      markersRef.current = []

      filteredData.forEach((event, index) => {
        if (event.latid && event.longit) {

          // Create a DOM element for the marker
          const markerDiv = document.createElement("div")

          const root = createRoot(markerDiv)

          // Conditional rendering of different icons based on the category
          const getCategoryIcon = (category) => {
            switch (category?.toLowerCase()) {
              case "events":
                return <GiFallingStar className="bg-[#7300CD] text-[white] text-[35px] px-[5px] py-[6px] rounded-full"/>
              case "restaurants":
                return <LuUtensilsCrossed className="bg-[#22003D] text-[white] text-[35px] px-[5px] py-[6px] rounded-full"/>
              case "accommodation":
                return <FaBed className="bg-[#b56feb] text-[white] text-[35px] px-[5px] py-[6px] rounded-full"/>
              default:
                return <FaMapMarkerAlt className="bg-[#ccb4e3] text-[white] text-[35px] px-[5px] py-[6px] rounded-full"/>
            }
          }

          root.render(
            getCategoryIcon(event.category)
          )

          // Create a popup with dynamic content for each marker
          const popupContent = `
      <div class="popup-content font-display" style="width: 100%; border-radius: 5px;">
        <img src="${event.image}" alt="${
            event.title
          }" style="width:100%; border-radius: 10px;" />
        <h3 style="font-size: 1rem; margin-top: 8px; font-weight:bold">${
          event.title
        }</h3>
        <p class="text-gray-700 text-[0.7rem] my-[6px] font-[600] two-lines">${stripHtmlTags(
          event.description
        )}</p>
      </div>
    `

          const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupContent) // Set the HTML content for the popup

          // Create and store each marker for each event
          const marker = new mapboxgl.Marker(markerDiv)
            .setLngLat([event.longit, event.latid])
            .setPopup(popup) // Set popup for marker
            .addTo(mapRef.current) // Add marker to the map

            // Log the marker index and whether the popup was attached
          markersRef.current.push(marker) // Store marker reference
        }
      })
    }
  }, [filteredData])

  // Fly to the marker's location and open the popup when a list item is clicked
  const handleFlyTo = (longit, latid, index) => {

    if (mapRef.current) {
      
        console.log(`FlyTo: Coordinates [${longit}, ${latid}] at index: ${index}`)

      mapRef.current.flyTo({
        center: [longit, latid],
        zoom: 16,
        essential: true,
        duration: 3000, // Duration in milliseconds (3 seconds here)
        easing: (t) => t * (2 - t), // Easing function for smoother effect
      })

      // Close the currently open popup (if any)
      if (activePopupRef.current) {
        activePopupRef.current.remove()
      }

      // Open the corresponding popup
      const marker = markersRef.current[index]

      if (marker) {
        const popup = marker.getPopup()
        if(popup) {
            popup.addTo(mapRef.current) // Add popup to the map and show it
            activePopupRef.current = popup // Track the open popup
        } else {
            console.log(`Popup not found for marker at index ${index}`)
        }
       
      } else {
        console.log(`Marker not found at index ${index}`)
      }
    }
  }

  // Strip HTML tags from description
  const stripHtmlTags = (html) => {
    return html ? html.replace(/<[^>]*>/g, "") : "" // Removes all HTML tags
  }

  const handleDestinationChange = (e) => {
    setDestination(e.target.value)
  }

  //  Dom starts
  return (
    <div className="h-full w-full relative">
      {/* Map container */}
      <div className="h-full" ref={mapContainerRef}></div>

      {/* Map list starts */}
      <div className="flex flex-col bg-white w-[93%] lg:w-[30%] h-[auto] lg:h-[75%] absolute top-[7%] left-[3%] rounded-lg p-4">
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
              <option value="all">All</option>
              <option value="Events">Events</option>
              <option value="Restaurants">Restaurants</option>
              <option value="Accommodation">Accommodation</option>
              {/* <option value="attractions">Attractions</option> */}
            </select>
          </form>
          <form className="w-[50%]">
            <select
              id="countries"
              value={destination}
              onChange={handleDestinationChange}
              className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="all">Select destination</option>
              {cities.map((city) => (
                <option key={city.id} value={city.title.toLowerCase()}>
                  {city.title}
                </option>
              ))}
            </select>
          </form>
        </div>

        <div className="list_bottom mt-[2.5rem] lg:h-[100%] lg:w-full overflow-y-auto hidden lg:block">
          <div className="w-full overflow-hidden">
            {/* List item starts */}

            {filteredData.map((item, index) => (
              <div
                key={item.id}
                className="itemm flex items-center gap-4 mb-6 pb-6 border-b-2 cursor-pointer"
                onClick={() => {
                  if (item.longit && item.latid) {
                    handleFlyTo(item.longit, item.latid, index)
                  }
                }}
              >
                <div className="item_image w-[35%]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt=""
                      className="w-[160px] h-[110px] rounded-lg"
                    />
                  ) : (
                    <img
                      src="/path/to/placeholder-image.png"
                      alt=""
                      className="w-[160px] h-[110px] rounded-lg"
                    />
                  )}
                </div>
                <div className="w-[60%]">
                  <h2 className="font-[700] text-black">{item.title}</h2>
                  <p className="text-[.7rem] mt-2 leading-normal two-lines  overflow-y-hidden">
                    {stripHtmlTags(item.description)}
                  </p>
                  <div className="flex items-center gap-2 cursor-pointer mt-3">
                    <span className="text-sm">Details</span>
                    <i className="text-blue-700 text-lg">
                      <FiArrowUpRight />
                    </i>
                  </div>
                </div>
              </div>
            ))}

            {/* List item ends */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapContainer2

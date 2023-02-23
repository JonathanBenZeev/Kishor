import { BsDoorOpen } from 'react-icons/bs'
import { AiOutlineCalendar, AiOutlineCar, AiOutlineWifi } from 'react-icons/ai'
import { GiFireplace, GiMountains } from 'react-icons/gi'
import { CgScreen } from 'react-icons/cg'
import { TbPool, TbToolsKitchen } from 'react-icons/tb'
import { IoSnowOutline } from 'react-icons/io5'
export const PlaceDetails = () => {
  return (
    <div className='place-details'>
      <div className='place-header'>
        <h3>Entire villa hosted by Krosney family</h3>
        <div>
          <ul>
            <li>4 guests</li> <li>6 bedrooms</li> <li>8 beds</li>
            <li>3 baths</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className='dry-details'>
        <div className='preview'>
          <span className='icon'>
            <BsDoorOpen />
          </span>
          <span>
            <h4>Self check-in</h4>
            <span className='inline-span'>
              Check yourself in with the personal key.
            </span>
          </span>
        </div>
        <div className='preview'>
          <span className='icon'>
            <AiOutlineCalendar />
          </span>
          <span>
            <h4>Free cancellation</h4>
          </span>
        </div>
      </div>
      <hr />
      <div className='details-description'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum unde
        veniam blanditiis itaque similique? Illum asperiores eaque dolore odit
        eos accusamus repellat, reiciendis recusandae mollitia nostrum possimus
        alias quae assumenda. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Qui iste mollitia adipisci labore tempore possimus optio numquam.
        Perspiciatis saepe nisi similique odit et quaerat, mollitia cupiditate,
        aperiam in, facere laboriosam. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Velit voluptas ipsa sapiente quod ratione! Blanditiis

      </div>
      <hr />
      <article className='place-offers'>
        <h3>What this place offers</h3>
        <div className='emnetis-container'>
          <div className='left-prev'>
            <div className='emnetis'>
              <span className='logo'>
                <GiMountains />
              </span>
              <span className='logo-desc'>Mountain view</span>
            </div>
            <div className='emnetis'>
              <span className='logo'>
                <AiOutlineWifi />
              </span>
              <span className='logo-desc'>Wifi</span>
            </div>
            <div className='emnetis'>
              <span className='logo'>
                <CgScreen />
              </span>
              <span className='logo-desc'>HDTV with Netflix</span>
            </div>
            <div className='emnetis'>
              <span className='logo'>
                <TbPool />
              </span>
              <span className='logo-desc'> Jacuzzi</span>
            </div>
          </div>
          <div className='right-prev'>
            <div className='emnetis'>
              <span className='logo'>
                <TbToolsKitchen />
              </span>
              <span className='logo-desc'>Kitchen</span>
            </div>
            <div className='emnetis'>
              <span className='logo'>
                <AiOutlineCar />
              </span>
              <span className='logo-desc'>Free parking on premises</span>
            </div>
            <div className='emnetis'>
              <span className='logo'>
                <IoSnowOutline />
              </span>
              <span className='logo-desc'>Air conditioning</span>
            </div>
            <div className='emnetis'>
              <span className='logo'>
                <GiFireplace />
              </span>
              <span className='logo-desc'>Fire place</span>
            </div>
          </div>
        </div>
      </article>
      <hr />
    </div>
  )
}

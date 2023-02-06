import { RiArrowRightSLine } from 'react-icons/ri'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useState } from 'react'



export const ImagGallery = ({imgs}) => {

    const [imgToShow, setImgToShow] = useState(1)

    const onChangePic = (diff) => {
        if (imgToShow === imgs.length && diff === 1) {
          setImgToShow(1)
          return
        }
    
        if (imgToShow === 1 && diff === -1) {
          setImgToShow(imgs.length)
          return
        }
        setImgToShow((prevImgToShow) => (prevImgToShow += diff))
      }
    
      const getImgById = (id) => {
        const { img_url } = imgs.filter((img) => img.id === id)[0]
        return img_url
      }
  return (
    <div
      className='gallery'
      style={{
        background: `url(${getImgById(imgToShow)})center center / cover  `,
      }}
    >
      <div className='btn-container'>
        <button
          className={`arow-btn left ${imgToShow > 1 ? '' : 'hide'} `}
          onClick={() => onChangePic(-1)}
        >
          <span className='left-sp'>
            <RiArrowLeftSLine />
          </span>
        </button>

        <button
          className={`arow-btn right ${
            imgToShow === imgs.length ? 'hide' : ''
          } `}
          onClick={() => onChangePic(1)}
        >
          <span className='right-sp'>
            <RiArrowRightSLine />
          </span>
        </button>
      </div>
      <div className='img-selction'>
        {imgs.map((img) => (
          <div
            key={img.id}
            className={`sign ${img.id === imgToShow ? 'bold' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  )
}

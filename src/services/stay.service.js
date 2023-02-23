import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
// import { userService } from './user.service.js'

const STORAGE_KEY = 'stayDB'

export const stayService = {
  query,
  getStay,
  getById,
  save,
  remove,
  getEmptyStay,
}

// _createStays()

async function query(filterBy) {
  // let stays = await storageService.query(STORAGE_KEY)
  let stays = await httpService.get('stay')


  if (filterBy.category) {
    stays = stays.filter((stay) => {
      return stay.labels.includes(filterBy.category)
    })
  }
  if (filterBy.location) {
    stays = stays.filter((stay) => {
      return stay.loc.country
        .toLowerCase()
        .includes(filterBy.location.toLowerCase())
    })
  }
  return stays
}

async function getStay() {
  const [stay] = await httpService.get('stay')
  return stay
}

async function getById(stayId) {
  // const stay = await storageService.get(STORAGE_KEY, stayId)
  const stay = await httpService.get(`stay/${stayId}`)

  return stay
}

async function save(stay, ) {
  if (stay._id) {
    return httpService.put(`stay/${stay._id}`, stay)
  } else {
    return httpService.post('stay', stay)
    // return storageService.post(STORAGE_KEY, stay)
  }
}

async function remove(stayId) {
  return httpService.remove(`stay/${stayId}`, stayId)
  // return storageService.remove(STORAGE_KEY, stayId)
}

function getEmptyStay() {
  return {
    _id: '',
    name: 'Magical Place',
    type: 'Entire home/apt',
    imgUrls: [
      'http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436975/hx9ravtjop3uqv4giupt.jpg',
      'http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436294/mvhb3iazpiar6duvy9we.jpg',
      'http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436496/ihozxprafjzuhil9qhh4.jpg',
      'http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436952/aef9ajipinpjhkley1e3.jpg',
      'http://res.cloudinary.com/dmtlr2viw/image/upload/v1663436948/vgfxpvmcpd2q40qxtuv3.jpg',
    ],
    price: 100,
    summary: 'An imaginary place far far away',
    capacity: '',
    amenities: [],
    labels: [''],
    host: {
      _id: '',
      fullname: '',
      imgUrl: '',
    },
    loc: {
      country: 'Canada',
      countryCode: 'CA',
      city: 'Montreal',
      address: 'Montréal, QC, Canada',
      lat: -73.54985,
      lng: 45.52797,
    },
    reviews: [],
    likedByUsers: [],
  }
}

//PVT
function _createDemoStays() {
  const DEMO_STAYS = [{
    _id: '121',
    name: 'Kishor',
    imgs: [
      {
        id: 1,
        img_url:
          'https://res.cloudinary.com/dmldeettg/image/upload/v1674118717/WhatsApp_Image_2022-12-01_at_10.03.52_PM_1_plqzyq.jpg',
      },
      {
        id: 2,
        img_url:
          'https://res.cloudinary.com/dmldeettg/image/upload/v1674118717/WhatsApp_Image_2022-12-01_at_10.03.52_PM_d5sntg.jpg',
      },
      {
        id: 3,
        img_url:
          'https://res.cloudinary.com/dmldeettg/image/upload/v1674118716/WhatsApp_Image_2022-12-01_at_10.03.53_PM_xu4wij.jpg',
      },
      {
        id: 4,
        img_url:
          'https://res.cloudinary.com/dmldeettg/image/upload/v1674118716/WhatsApp_Image_2022-12-01_at_10.03.53_PM_1_f9nun9.jpg',
      },
      {
        id: 5,
        img_url:
          'https://res.cloudinary.com/dmldeettg/image/upload/v1674118717/WhatsApp_Image_2022-12-01_at_10.05.01_PM_mkw0ev.jpg',
      },
    ],
    inventaions: []
  }
  ]


  utilService.saveToStorage(STORAGE_KEY, JSON.parse(JSON.stringify(DEMO_STAYS)))
}

function _createStays() {
  let staysDB = utilService.loadFromStorage(STORAGE_KEY)
  if (!staysDB || !staysDB.length) {
    _createDemoStays()
  }
}

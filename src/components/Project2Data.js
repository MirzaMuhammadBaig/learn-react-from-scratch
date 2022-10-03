import React from 'react'
import pic1 from '../img/pic1.jpg'
import pic2 from '../img/pic2.jpg'
import pic3 from '../img/pic3.jpg'
import pic4 from '../img/pic4.jpg'

function Project2Data() {

    let data = [
        {
            id:1,
            img : pic1,
            title: "First title.",
            description : 'Lorem ipsum dolor sit, perspiciatis fuga commodi illo!',
            price: 136,
            coverimg: "Nature-Pic-1.jpg",
            stats: {
                rating: 5.0,
                reviewCount: 6
            },
            location:"Pakistan",
            openSpots: 1,
        },
        {
            id:2,
            img : pic2,
            title: "Second title.",
            description : ' Molestiae nobis perspiciatis fuga commodi illo! Placeat.',
            price: 125,
            coverimg: "Nature-Pic-2.jpg",
            stats: {
                rating: 4.9,
                reviewCount: 5
            },
            location: "USA",
            openSpots: 0,
        },
        {
            id:3,
            img : pic3,
            title: "Third title.",
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            price: 100,
            coverimg: "Nature-Pic-3.jpg",
            stats: {
                rating: 4.8,
                reviewCount: 3
            },
            location:"Pakistan",
            openSpots: 1,
        },
        {
            id:4,
            img : pic4,
            title: "Fourth title.",
            description : 'Consequuntur accusantium consectetur maxime rerum asperiores sequi!',
            price: 75,
            coverimg: "Nature-Pic-4.jpg",
            stats: {
                rating: 4.7,
                reviewCount: 3
            },
            location: "USA",
            openSpots: 0,
        }
    ]

    console.log(data)

  return (
    <>
    
    </>
  )
}

export default Project2Data

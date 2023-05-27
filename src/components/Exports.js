import styled from 'styled-components';
import imagehouse from "../assets/image/imagehouse.jpg"


 export const Button = styled.button`
 border: 2px solid black;
 border-radius: 8px;
 &:hover{
    background-color: var(--windbnb-tertiary);
 }
    
`;
export const ListItem = styled.div`
cursor:pointer;
width: 200px;
border-radius: 8px;
padding: 5px;

&:hover{
    background-color: var(--windbnb-tertiary);
    color:white;
    
 }

`

export const data = [
    {
        id : 1,
        image: <img className='rounded-2xl' src={imagehouse} alt="image_house"/>,
        type: "Entire Appartment",
        bed: <span> . 2 beds</span>,
        stars: <img alt="star"/>,
        rating: 4.00,
        superHost: "superHost",
        title: "Stylist apartment in center of city"

    }, 
    {
        id : 2,
        image: <img className='rounded-2xl' src={imagehouse} alt="image_house"/>,
        type: "Entire Appartment",
        bed: <span> . 2 beds</span>,
        stars: <img alt="star"/>,
        rating: 4.0,
        title: "Stylist apartment in center of city"

    },
    {
        id : 3,
         image: <img className='rounded-2xl' src={imagehouse} alt="image_house"/>,
        type: "Entire Appartment",
        bed: <span> . 2 beds</span>,
        stars: <img alt="star"/>,
        rating: 4.0,
        title: "Stylist apartment in center of city"

    },
    {
        id : 4,
        image: <img className='rounded-2xl' src={imagehouse} alt="image_house"/>,
        type: "Entire Appartment",
        bed: <span> . 2 beds</span>,
        stars: <img alt="star"/>,
        superHost: "superHost",
        rating: 4.50,
        title: "Stylist apartment in center of city"
    },
    {
        id : 5,
       image: <img className='rounded-2xl' src={imagehouse} alt="image_house"/>,
        type: "Entire Appartment",
        bed: <span> . 2 beds</span>,
        stars: <img alt="star"/>,
        rating: 3.00,
        title: "Stylist apartment in center of city"

    },
    {
        id : 6,
       image: <img className='rounded-2xl' src={imagehouse} alt="image_house"/>,
        type: "Entire Appartment",
        bed: <span> . 2 beds</span>,
        stars: <img alt="star"/>,
        rating: 3.00,
        title: "Stylist apartment in center of city"

    }
];



export const Locations = [
    {
        id: 1,
        name: "helsinki Finland"

    },
    {
        id: 1,
        name: "Nigeria Lagos"

    },
    {
        id: 1,
        name: "USA NewYork"

    },
    {
        id: 1,
        name: "Dubai Abudabi "

    }
]
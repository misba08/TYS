import React, { useState } from 'react';
import Box from './Box';
import './Navbar.css';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import img4 from './Images/img4.jpg';
import img5 from './Images/img5.jpg';
import img6 from './Images/img6.jpg';
import img7 from './Images/img4.jpg';
import img8 from './Images/img3.jpg';

const data = [
    {
        id: 1,
        imageUrl: img1,
        title: 'On september 19, 2032',
        boldHeading: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet 1',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged....'
  },
    {
        id: 2,
        imageUrl: img2,
        title: 'On september 20, 2032',
        boldHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.2',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged....'
  },
    {
        id: 3,
        imageUrl: img3,
        title: 'On september 21, 2032',
        boldHeading: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet 3',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged....'
  },
    {
        id: 4,
        imageUrl: img4,
        title: 'On september 22, 2032',
        boldHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 4',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged....'
  },
    {
        id: 5,
        imageUrl: img5,
        title: 'On september 23, 2032',
        boldHeading: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s 5',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged....'
  },
    {
        id: 6,
        imageUrl: img6,
        title: 'On september 24, 2032',
        boldHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 6',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged....'
  },
    {
        id: 7,
        imageUrl: img7,
        title: 'On september 25, 2032',
        boldHeading: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet 7',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged....'
  },
    {
        id: 8,
        imageUrl: img8,
        title: 'On september 26, 2032',
        boldHeading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 8',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged....'
  },
];

const Boxes = ({ boxData }) => (
    <div className='BoxesContainer'>
        {boxData.map((box) => (
            <Box key={box.id} {...box} />
        ))}
    </div>
);
const Pagination = ({ totalBoxes, boxesPerPage, onPageChange }) => {
    const totalPages = Math.ceil(totalBoxes / boxesPerPage);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            {Array.from({ length: totalPages }, (_, index) => (
                <div key={index + 1} onClick={() => onPageChange(index + 1)} className="pagination-item">
                    {index + 1}
                </div>
            ))}
        </div>
    );
};


const Blog2 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const boxesPerPage = 6;
    const indexOfLastBox = currentPage * boxesPerPage;
    const indexOfFirstBox = indexOfLastBox - boxesPerPage;
    const currentBoxes = data.slice(indexOfFirstBox, indexOfLastBox);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <Boxes boxData={currentBoxes} />
            <Pagination
                totalBoxes={data.length}
                boxesPerPage={boxesPerPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Blog2;

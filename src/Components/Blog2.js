import React, { useState } from 'react';
import Box from './Box';
import './Navbar.css';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import img4 from './Images/img4.jpg';
import img5 from './Images/img5.jpg';
import img6 from './Images/img6.jpg';
import img7 from './Images/img7.jpg';
import img8 from './Images/img8.jpg';
import img9 from './Images/img9.jpg';
import img10 from './Images/img10.jpg';
import img11 from './Images/img11.jpg';
import img12 from './Images/img12.jpg';
import img13 from './Images/img13.jpg';
import img14 from './Images/img14.jpg';
<link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>


const data = [
    {
        id: 1,
        imageUrl: img1,
        title: 'On september 19, 2032',
        boldHeading: 'Daal Rice',
        paragraph: ' Indulge in the comforting flavors of our delectable dal rice, a wholesome combination of perfectly cooked lentils and fragrant rice, seasoned with a symphony of aromatic spices. Savor the essence of home-cooked goodness in every bite of our dal rice – a timeless classic that brings together the heartiness of lentils and the simplicity of rice, delivering a soul-satisfying meal.'
    },
    {
        id: 2,
        imageUrl: img2,
        title: 'On september 20, 2032',
        boldHeading: 'Rice Plate',
        paragraph: 'Embark on a culinary journey with our enticing rice plate, showcasing a medley of aromatic rice varieties paired with flavorful accompaniments that promise a symphony of tastes on every plate. Dive into a world of culinary delight with our curated rice plate – a feast for the senses featuring a diverse selection of rice preparations, each meticulously crafted to offer a harmonious blend of textures and flavors.'
    },
    {
        id: 3,
        imageUrl: img3,
        title: 'On september 21, 2032',
        boldHeading: 'Roti/Tandoori Roti',
        paragraph: 'Authenticity of our freshly baked tandoori roti, a soft and pillowy Indian flatbread crafted in a traditional clay oven, delivering the perfect complement to your favorite dishes. Immerse yourself in the rustic charm of our handcrafted roti, a quintessential Indian bread that adds a touch of tradition to your plate, embodying the essence of expertly baked goodness.'
    },
    {
        id: 4,
        imageUrl: img4,
        title: 'On september 22, 2032',
        boldHeading: 'Chinese Platter',
        paragraph: 'Embark on a culinary adventure with our Chinese Platter, a symphony of flavors and textures featuring an array of mouthwatering dishes, delivering an authentic taste of China on one enticing plate. Experience the allure of our Chinese Platter, where the vibrant colors and bold flavors of dishes like General Tsos Chicken, perfectly steamed dumplings.'
    },
    {
        id: 5,
        imageUrl: img5,
        title: 'On september 23, 2032',
        boldHeading: 'Desserts',
        paragraph: 'Dive into a world of sweet indulgence with our divine desserts, where every bite is a celebration of flavor and craftsmanship, from luscious cakes to delicate pastries, crafted to satisfy your sweet cravings. Experience the joy of the extraordinary in every dessert on our menu. From decadent chocolate creations to refreshing fruit delights.'
    },
    {
        id: 6,
        imageUrl: img6,
        title: 'On september 24, 2032',
        boldHeading: 'Snacks',
        paragraph: 'Snacking moments with our enticing range of snacks, where crispy delights and savory bites come together to create a symphony of flavors that satisfy every craving. snacking moments with our enticing range of snacks, where crispy delights and savory bites come together to create a symphony of flavors that satisfy every craving.'
    },
    {
        id: 7,
        imageUrl: img7,
        title: 'On september 25, 2032',
        boldHeading: 'Cakes',
        paragraph: 'Delight in the artistry of our exquisite cakes, where each slice tells a tale of indulgence, meticulously crafted with premium ingredients to bring sweetness to your celebrations. Celebrate lifes sweetest moments with our range of heavenly cakes, baked to perfection and adorned with love. Whether its a birthday, anniversary, or just a craving for something sweet.'
    },
    {
        id: 8,
        imageUrl: img8,
        title: 'On september 26, 2032',
        boldHeading: 'Veg Platter',
        paragraph: 'Flavors of our Veg Platter, a vibrant ensemble featuring a medley of grilled vegetables, hearty appetizers, and delectable sides that promise a vegetarian feast for your palate. Indulge in the wholesome goodness of our Veg Platter, a symphony of textures and tastes that celebrates the richness of vegetarian cuisine. From savory kebabs to tantalizing bites, every dish is a culinary journey on a single plate.'
    },
    {
        id: 9,
        imageUrl: img9,
        title: 'On september 27, 2032',
        boldHeading: 'Burger',
        paragraph: 'Perfection of our gourmet burgers, crafted with premium ingredients and grilled to juicy perfection, offering an unforgettable taste experience that will leave your taste buds craving for more.Elevate your burger experience with our handcrafted delights, where each bite is a symphony of flavors and textures, showcasing the artistry of our culinary expertise and dedication to burger perfection.'
    },
    {
        id: 10,
        imageUrl: img10,
        title: 'On september 28, 2032',
        boldHeading: 'Pizza',
        paragraph: ')ur delectable pizzas, each handcrafted with the finest ingredients, expertly baked to perfection, and topped with a medley of flavorful delights for an authentic taste experience. mbark on a pizza journey like no other, where our carefully curated selection of pizzas promises a symphony of flavors that dance on your palate.'
    },
    {
        id: 11,
        imageUrl: img11,
        title: 'On september 29, 2032',
        boldHeading: 'Biryani',
        paragraph: 'Aromatic allure of our biryanis, where fragrant basmati rice and tenderly marinated meats come together in a symphony of spices, creating an exquisite dining experience that captivates the senses. creating a harmonious blend of spices that transports you to a world of culinary delight. Our biryanis promise an unforgettable journey through the heart of Indian cuisine.'
    },
    {
        id: 12,
        imageUrl: img12,
        title: 'On september 30, 2032',
        boldHeading: 'Rolls',
        paragraph: 'Relish the bold and flavorful experience of our rolls, where succulent fillings, vibrant veggies, and signature sauces come together in a perfectly wrapped parcel, offering a handheld delight that satisfies your cravings. From classic chicken tikka rolls to innovative veggie wraps, our rolls redefine the art of handheld culinary bliss.'
    },
    {
        id: 13,
        imageUrl: img13,
        title: 'On October 1, 2032',
        boldHeading: 'Pastry',
        paragraph: 'Your sweet tooth with our divine pastries, where light and flaky layers envelop luscious fillings, creating an irresistible symphony of textures and flavors that elevate your dessert experience. From the buttery goodness of puff pastry to the richness of cream-filled delights, our pastries promise a journey into the world of sweet indulgence.'
    },
    {
        id: 14,
        imageUrl: img14,
        title: 'On october 2, 2032',
        boldHeading: 'Ice Cream',
        paragraph: 'World of frozen bliss with our premium ice creams, handcrafted with the finest ingredients to deliver a symphony of velvety textures and indulgent flavors that redefine the art of frozen delights.  Crafted with love and creativity, our frozen treasures offer a palate-pleasing adventure, inviting you to savor the richness of every scoop in a symphony of frozen delight.'
    },

];

const Boxes = ({ boxData }) => (
    <div className='BoxesContainer'>
        {boxData.map((box) => (
            <Box key={box.id} {...box} />
        ))}
    </div>
);
const Pagination = ({ totalBoxes, boxesPerPage, onPageChange, currentPage }) => {
    const totalPages = Math.ceil(totalBoxes / boxesPerPage);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <div className="pagination">
                {currentPage > 1 && (
                    <div className="pagination-item" onClick={() => onPageChange(currentPage - 1)}>
                        <i className="material-icons">keyboard_arrow_left</i>
                    </div>
                )}
                {Array.from({ length: totalPages }, (_, index) => (
                    <div
                        key={index + 1}
                        onClick={() => onPageChange(index + 1)}
                        className={`pagination-item ${currentPage === index + 1 ? 'active' : ''}`}>
                        {index + 1}
                    </div>
                ))}
                {currentPage < totalPages && (
                    <div className="pagination-item" onClick={() => onPageChange(currentPage + 1)}>
                        <i className="material-icons">keyboard_arrow_right</i>
                    </div>
                )}
            </div>
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
                currentPage={currentPage}
            />
        </div>
    );
};

export default Blog2;

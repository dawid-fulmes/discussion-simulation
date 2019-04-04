import React from 'react';
import picture from '../img/money.jpg';
import './Article.scss';


const Article = () => {
    return (
        <article>
            <header>
                Very controversial article!!!
            </header>
            <section>
                <img src={picture} alt="Lot of money" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero qui repellat in inventore natus eius fugiat, a unde deserunt recusandae incidunt vel neque dolorem magni? Vitae dicta quod, expedita consequatur odio quo nobis odit repudiandae velit, quidem laudantium quibusdam fugit delectus in molestiae doloremque quos voluptatum commodi quis error nisi dignissimos dolor aspernatur nesciunt! Hic voluptatem officiis ipsa deserunt cumque expedita quibusdam ipsum commodi temporibus illo facilis error sint modi natus molestiae tempore, non velit perferendis quam cupiditate, ex sed laborum blanditiis at. Quo ut hic, tempora omnis ipsam harum blanditiis vero ad distinctio sint esse aliquid, sapiente quae facilis.</p>
            </section>
        </article>
    );
}

export default Article;
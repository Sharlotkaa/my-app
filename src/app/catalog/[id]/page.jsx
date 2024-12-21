import prisma from "/lib/prisma";
import "./CardPage.css";

export default async function Page({ params }) {
    const { id } = await params;
    const cardList = await prisma.Card.findMany();
    return (
        <>
            {cardList.map((post) => {
                if (id == post.id) {
                    return (
                        <div className="card-container">
                            <h2 className="card-title">{post.name}</h2>
                            <p className="card-description">
                            <span className="card-text">{post.description}</span>
                            <span className="card-price">{post.price}$</span>
                            </p>
                        </div>
                    );
                }
            })}
        </>
    );
}

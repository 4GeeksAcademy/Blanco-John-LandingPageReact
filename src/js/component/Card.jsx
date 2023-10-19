import React from "react";

const Card = () => {
    return (
        <>
            <div className="col-3">
                <div className="card">
                    <img
                        src="https://picsum.photos/seed/picsum/500/325"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi ducimus laboriosam numquam reiciendis</p>
                    </div>
                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;
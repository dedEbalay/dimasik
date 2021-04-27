import React from "react";

const HeaderForm = () => {
    return (
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Найти пивчик" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
    )
}

export default HeaderForm;